"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/lib/axios";
import {
  Box,
  Container,
  TextField,
  Button,
  Paper,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Delete, Add, Save, Collections } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function BannerAdmin() {
  const [slides, setSlides] = useState([]);
  const [form, setForm] = useState({
    tag: "",
    title_line1: "",
    title_highlight: "",
    description: "",
    button_text: "",
    button_link: "",
    image_url: "",
    position: 0,
  });

  const fetchSlides = async () => {
    const res = await axiosInstance.get("/banners");
    setSlides(res.data);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosInstance.post("/banners", form);
    setForm({
      tag: "",
      title_line1: "",
      title_highlight: "",
      description: "",
      button_text: "",
      button_link: "",
      image_url: "",
      position: 0,
    });
    fetchSlides();
  };

  const handleDelete = async (id: number) => {
    if (confirm("Delete slide?")) {
      await axiosInstance.delete(`/banners/${id}`);
      fetchSlides();
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        <Collections /> Banner Manager
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
              Add Slide
            </Typography>
            <Stack spacing={2} component="form" onSubmit={handleSubmit}>
              <TextField
                label="Tag (e.g. OUR VISION)"
                fullWidth
                size="small"
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
              />
              <TextField
                label="Title Line 1"
                fullWidth
                size="small"
                value={form.title_line1}
                onChange={(e) =>
                  setForm({ ...form, title_line1: e.target.value })
                }
              />
              <TextField
                label="Highlight (Blue Text)"
                fullWidth
                size="small"
                value={form.title_highlight}
                onChange={(e) =>
                  setForm({ ...form, title_highlight: e.target.value })
                }
              />
              <TextField
                label="Image URL"
                fullWidth
                size="small"
                value={form.image_url}
                onChange={(e) =>
                  setForm({ ...form, image_url: e.target.value })
                }
              />

              <TextField
                label="Button Text"
                fullWidth
                size="small"
                value={form.button_text}
                onChange={(e) =>
                  setForm({ ...form, button_text: e.target.value })
                }
              />
              <TextField
                label="Button Link"
                fullWidth
                size="small"
                value={form.button_link}
                onChange={(e) =>
                  setForm({ ...form, button_link: e.target.value })
                }
              />

              <Button type="submit" variant="contained" startIcon={<Save />}>
                Save Slide
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {slides.map((s: any) => (
              <Paper
                key={s.id}
                sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}
              >
                <img
                  src={s.image_url}
                  style={{
                    width: 100,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                  alt=""
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {s.title_line1} {s.title_highlight}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {s.tag}
                  </Typography>
                </Box>
                <IconButton color="error" onClick={() => handleDelete(s.id)}>
                  <Delete />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
