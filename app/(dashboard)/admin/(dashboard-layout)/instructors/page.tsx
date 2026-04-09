"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  // Grid,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";
import apiClient from "@/app/lib/apiClient";

export default function AdminInstructors() {
  const [section, setSection] = useState({
    heading: "",
    highlight_text: "",
  });

  const [instructors, setInstructors] = useState<any[]>([]);

  const [form, setForm] = useState({
    id: null as number | null,
    name: "",
    experience: "",
    skills: "",
    image: "",
    link: "",
  });

  const loadData = async () => {
    const res = await apiClient.get("/api/instructors");
    setSection(res.data.section || {});
    setInstructors(res.data.instructors || []);
  };

  useEffect(() => {
    loadData();
  }, []);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "instructors");

    try {
      // Note: Most modern Axios setups handle 'multipart/form-data' automatically
      // if the body is an instance of FormData, but explicit is fine!
      const res = await apiClient.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = res.data.url;

      // Update the form state here to ensure the UI stays in sync
      setForm((prev) => ({
        ...prev,
        image: imageUrl,
      }));

      console.log("Upload successful:", imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("Image upload failed", error);
      // Add a toast notification here if you have one!
      throw error;
    }
  };

  const saveInstructor = async () => {
    if (form.id) {
      await apiClient.put("/api/instructors", {
        type: "instructor",
        ...form,
      });
    } else {
      await apiClient.post("/api/instructors", form);
    }

    resetForm();
    loadData();
  };

  const editInstructor = (item: any) => {
    // Simply sets the local state for the form, no API call needed here
    setForm(item);
  };

  const deleteInstructor = async (id: number) => {
    if (!confirm("Are you sure you want to remove this instructor?")) return;

    try {
      // Use the 'params' object for cleaner query string handling (?id=X)
      await apiClient.delete("/api/instructors", {
        params: { id },
      });
      loadData();
    } catch (error: any) {
      console.error("Delete failed:", error.response?.data || error.message);
    }
  };

  const updateHeading = async () => {
    try {
      await apiClient.put("/api/instructors", {
        type: "section",
        ...section,
      });

      alert("Heading Updated successfully!");
    } catch (error: any) {
      console.error("Update failed:", error.response?.data || error.message);
    }
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      experience: "",
      skills: "",
      image: "",
      link: "",
    });
  };

  return (
    <Grid container spacing={3}>
      {/* SECTION HEADING */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Instructor Section Heading</Typography>

          <TextField
            label="Heading"
            fullWidth
            sx={{ my: 1 }}
            value={section.heading}
            onChange={(e) =>
              setSection({ ...section, heading: e.target.value })
            }
          />

          <TextField
            label="Highlight Text"
            fullWidth
            sx={{ my: 1 }}
            value={section.highlight_text}
            onChange={(e) =>
              setSection({
                ...section,
                highlight_text: e.target.value,
              })
            }
          />

          <Button variant="contained" onClick={updateHeading}>
            Update Heading
          </Button>
        </Paper>
      </Grid>

      {/* ADD / EDIT INSTRUCTOR */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">
            {form.id ? "Edit Instructor" : "Add Instructor"}
          </Typography>

          <TextField
            label="Instructor Name"
            fullWidth
            sx={{ my: 1 }}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            label="Experience"
            fullWidth
            sx={{ my: 1 }}
            value={form.experience}
            onChange={(e) =>
              setForm({
                ...form,
                experience: e.target.value,
              })
            }
          />

          <TextField
            label="Skills"
            fullWidth
            multiline
            rows={2}
            sx={{ my: 1 }}
            value={form.skills}
            onChange={(e) => setForm({ ...form, skills: e.target.value })}
          />

          <TextField
            label="Profile Link"
            fullWidth
            sx={{ my: 1 }}
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadImage(file);
            }}
          />

          {form.image && (
            <img src={form.image} style={{ width: 150, marginTop: 10 }} />
          )}

          <Button variant="contained" sx={{ mt: 2 }} onClick={saveInstructor}>
            {form.id ? "Update Instructor" : "Add Instructor"}
          </Button>

          {form.id && (
            <Button sx={{ ml: 2, mt: 2 }} onClick={resetForm}>
              Cancel
            </Button>
          )}
        </Paper>
      </Grid>

      {/* INSTRUCTOR LIST */}
      {instructors.map((inst) => (
        <Grid item xs={12} md={4} key={inst.id}>
          <Paper sx={{ p: 2 }}>
            <img
              src={inst.image}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
              }}
            />

            <Typography variant="h6" sx={{ mt: 1 }}>
              {inst.name}
            </Typography>

            <Typography>{inst.experience}</Typography>

            <Typography variant="body2">{inst.skills}</Typography>

            <div style={{ marginTop: 10 }}>
              <IconButton color="primary" onClick={() => editInstructor(inst)}>
                <Edit />
              </IconButton>

              <IconButton
                color="error"
                onClick={() => deleteInstructor(inst.id)}
              >
                <Delete />
              </IconButton>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
