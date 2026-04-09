"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  // Grid,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";
import apiClient from "@/app/lib/apiClient";

interface Section {
  heading: string;
  highlight_text: string;
  description: string;
}

interface Member {
  id?: number;
  name: string;
  role: string;
  image_url: string;
  bio?: string;
}

export default function AdminTeam() {
  const [section, setSection] = useState<Section>({
    heading: "",
    highlight_text: "",
    description: "",
  });

  const [members, setMembers] = useState<Member[]>([]);
  const [newMember, setNewMember] = useState<Member>({
    name: "",
    role: "",
    image_url: "",
    bio: "",
  });
  const loadData = async () => {
    try {
      // apiClient handles the baseURL and JSON parsing
      const { data } = await apiClient.get("/api/team-section");
      setSection(data.section);
      setMembers(data.members || []);
    } catch (error) {
      console.error("Failed to load team data", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const updateSection = async () => {
    try {
      await apiClient.put("/api/team-section", {
        type: "section",
        ...section,
      });
      alert("Section updated");
    } catch (error) {
      console.error("Failed to update section", error);
    }
  };

  const addMember = async () => {
    if (!newMember.name || !newMember.role || !newMember.image_url) {
      alert("Please fill all required fields");
      return;
    }
    try {
      await apiClient.post("/api/team-section", newMember);
      setNewMember({ name: "", role: "", image_url: "", bio: "" });
      loadData();
    } catch (error) {
      console.error("Failed to add member", error);
    }
  };

  const deleteMember = async (id: number) => {
    if (!confirm("Are you sure you want to remove this team member?")) return;

    try {
      // Cleaner query string handling using 'params'
      await apiClient.delete("/api/team-section", {
        params: { id },
      });
      loadData();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    // If your backend needs it, add the folder:
    formData.append("folder", "team");

    try {
      const res = await apiClient.post("/api/upload", formData, {
        headers: {
          // This is the secret sauce:
          // It prevents the 'application/json' default from breaking the upload
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data.url as string;
    } catch (error) {
      console.error("Image upload failed", error);
      throw error;
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Section Content */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Team Section</Typography>

          <TextField
            label="Heading"
            fullWidth
            value={section.heading}
            onChange={(e) =>
              setSection({ ...section, heading: e.target.value })
            }
            sx={{ my: 1 }}
          />

          <TextField
            label="Highlight Text"
            fullWidth
            value={section.highlight_text}
            onChange={(e) =>
              setSection({ ...section, highlight_text: e.target.value })
            }
            sx={{ my: 1 }}
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={section.description}
            onChange={(e) =>
              setSection({ ...section, description: e.target.value })
            }
            sx={{ my: 1 }}
          />

          <Button variant="contained" onClick={updateSection}>
            Update Section
          </Button>
        </Paper>
      </Grid>

      {/* Add Member */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Add Team Member</Typography>

          <TextField
            label="Name"
            fullWidth
            sx={{ my: 1 }}
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
          />

          <TextField
            label="Role"
            fullWidth
            sx={{ my: 1 }}
            value={newMember.role}
            onChange={(e) =>
              setNewMember({ ...newMember, role: e.target.value })
            }
          />

          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const imageUrl = await uploadImage(file);
              setNewMember({ ...newMember, image_url: imageUrl });
            }}
          />
          {newMember.image_url && (
            <img
              src={newMember.image_url}
              style={{ width: 120, marginTop: 10 }}
            />
          )}

          <Button variant="contained" sx={{ mt: 2 }} onClick={addMember}>
            Add Member
          </Button>
        </Paper>
      </Grid>

      {/* Members List */}
      {members.map((member) => (
        <Grid item xs={12} md={4} key={member.id}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">{member.name}</Typography>
            <Typography>{member.role}</Typography>

            <img
              src={member.image_url}
              style={{ width: "100%", marginTop: 10 }}
            />

            <IconButton
              color="error"
              onClick={() => member.id && deleteMember(member.id)}
            >
              <Delete />
            </IconButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
