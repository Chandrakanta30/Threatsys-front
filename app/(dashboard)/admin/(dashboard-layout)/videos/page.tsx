"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, TextField, Button, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";
import apiClient from "@/app/lib/apiClient";

export default function VideoAdmin() {
  const [videos, setVideos] = useState<any[]>([]);
  const [form, setForm] = useState({
    id: null as number | null,
    image: "",
    video_url: "",
    position: 1,
  });

  const loadVideos = async () => {
    try {
      // apiClient handles the baseURL and automatic JSON parsing
      const { data } = await apiClient.get("/api/videos");
      setVideos(data);
    } catch (err) {
      console.error("Failed to load videos", err);
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const uploadImage = async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", "videos");

    try {
      // Axios correctly handles FormData boundaries and Auth headers
      const res = await apiClient.post("/api/upload", fd);

      // No need for await res.json(), data is already parsed in res.data
      setForm((prev) => ({ ...prev, image: res.data.url }));
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const saveVideo = async () => {
    try {
      if (form.id) {
        await apiClient.put("/api/videos", form);
      } else {
        await apiClient.post("/api/videos", form);
      }

      setForm({ id: null, image: "", video_url: "", position: 1 });
      loadVideos();
    } catch (err) {
      console.error("Failed to save video", err);
    }
  };

  const editVideo = (v: any) => {
    setForm(v);
  };

  const deleteVideo = async (id: number) => {
    if (!confirm("Remove this video?")) return;

    try {
      // Using params object for cleaner query strings (?id=...)
      await apiClient.delete("/api/videos", {
        params: { id },
      });
      loadVideos();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <TextField
            label="YouTube Video URL"
            fullWidth
            value={form.video_url}
            onChange={(e) => setForm({ ...form, video_url: e.target.value })}
          />

          <TextField
            label="Position"
            fullWidth
            sx={{ mt: 2 }}
            value={form.position}
            onChange={(e) =>
              setForm({ ...form, position: Number(e.target.value) })
            }
          />

          <input
            type="file"
            onChange={(e) => uploadImage(e.target.files![0])}
          />

          {form.image && <img src={form.image} width={120} />}

          <Button variant="contained" sx={{ mt: 2 }} onClick={saveVideo}>
            {form.id ? "Update Video" : "Add Video"}
          </Button>
        </Paper>
      </Grid>

      {videos.map((v) => (
        <Grid item md={3} key={v.id}>
          <Paper sx={{ p: 2 }}>
            <img src={v.image} width="100%" />

            <p>{v.video_url}</p>

            <IconButton onClick={() => editVideo(v)}>
              <Edit />
            </IconButton>

            <IconButton onClick={() => deleteVideo(v.id)}>
              <Delete />
            </IconButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
