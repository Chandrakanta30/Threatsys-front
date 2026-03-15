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
  Rating,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  const [form, setForm] = useState({
    id: null as number | null,
    name: "",
    comment: "",
    rating: 5,
    image: "",
  });

  const loadData = async () => {
    const res = await axios.get("/api/testimonials?page=1");
    setTestimonials(res.data.testimonials);

    const msg = await axios.get("/api/contact/messages");
    setMessages(msg.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // IMAGE UPLOAD
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "testimonials");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setForm({
      ...form,
      image: data.url,
    });
  };

  // SAVE TESTIMONIAL
  const saveTestimonial = async () => {
    if (form.id) {
      await axios.put("/api/testimonials", form);
    } else {
      await axios.post("/api/testimonials", form);
    }

    resetForm();
    loadData();
  };

  const editTestimonial = (item: any) => {
    setForm(item);
  };

  const deleteTestimonial = async (id: number) => {
    await axios.delete(`/api/testimonials?id=${id}`);
    loadData();
  };

  const deleteMessage = async (id: number) => {
    await axios.delete(`/api/contact/messages?id=${id}`);
    loadData();
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      comment: "",
      rating: 5,
      image: "",
    });
  };

  return (
    <Grid container spacing={3}>
      {/* ADD / EDIT TESTIMONIAL */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">
            {form.id ? "Edit Testimonial" : "Add Testimonial"}
          </Typography>

          <TextField
            label="Name"
            fullWidth
            sx={{ my: 1 }}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            label="Comment"
            multiline
            rows={3}
            fullWidth
            sx={{ my: 1 }}
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />

          <Typography sx={{ mt: 2 }}>Rating</Typography>

          <Rating
            value={form.rating}
            onChange={(e, newValue) =>
              setForm({ ...form, rating: newValue || 5 })
            }
          />

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadImage(file);
            }}
          />

          {form.image && (
            <img src={form.image} style={{ width: 120, marginTop: 10 }} />
          )}

          <Button variant="contained" sx={{ mt: 2 }} onClick={saveTestimonial}>
            {form.id ? "Update Testimonial" : "Add Testimonial"}
          </Button>

          {form.id && (
            <Button sx={{ ml: 2 }} onClick={resetForm}>
              Cancel
            </Button>
          )}
        </Paper>
      </Grid>

      {/* TESTIMONIAL LIST */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Testimonials</Typography>

          <Grid container spacing={2}>
            {testimonials.map((item) => (
              <Grid item md={6} key={item.id}>
                <Paper sx={{ p: 2 }}>
                  <img
                    src={item.image}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                    }}
                  />

                  <Typography variant="h6">{item.name}</Typography>

                  <Rating value={item.rating} readOnly />

                  <Typography variant="body2">{item.comment}</Typography>

                  <IconButton
                    color="primary"
                    onClick={() => editTestimonial(item)}
                  >
                    <Edit />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => deleteTestimonial(item.id)}
                  >
                    <Delete />
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>

      {/* CONTACT MESSAGES */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Contact Messages</Typography>

          {messages.map((msg) => (
            <Paper key={msg.id} sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6">{msg.name}</Typography>

              <Typography>{msg.email}</Typography>

              <Typography>Topic: {msg.topic}</Typography>

              <Typography>Phone: {msg.phone}</Typography>

              <Typography>{msg.message}</Typography>

              <IconButton color="error" onClick={() => deleteMessage(msg.id)}>
                <Delete />
              </IconButton>
            </Paper>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
