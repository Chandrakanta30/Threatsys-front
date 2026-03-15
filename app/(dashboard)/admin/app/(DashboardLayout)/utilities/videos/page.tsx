"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, TextField, Button, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function VideoAdmin() {
  const [videos, setVideos] = useState<any[]>([]);
  const [form, setForm] = useState({
    id: null as number | null,
    image: "",
    video_url: "",
    position: 1,
  });

  const loadVideos = async () => {
    const res = await axios.get("/api/videos");
    setVideos(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const uploadImage = async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", "videos");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();

    setForm({ ...form, image: data.url });
  };

  const saveVideo = async () => {
    if (form.id) {
      await axios.put("/api/videos", form);
    } else {
      await axios.post("/api/videos", form);
    }

    setForm({ id: null, image: "", video_url: "", position: 1 });
    loadVideos();
  };

  const editVideo = (v: any) => {
    setForm(v);
  };

  const deleteVideo = async (id: number) => {
    await axios.delete(`/api/videos?id=${id}`);
    loadVideos();
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
