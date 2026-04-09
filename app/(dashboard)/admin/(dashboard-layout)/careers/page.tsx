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

export default function CareersAdmin() {
  const [intro, setIntro] = useState<any>({});
  const [happy, setHappy] = useState<any>({});
  const [videos, setVideos] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);

  const [videoUrl, setVideoUrl] = useState("");

  const [jobForm, setJobForm] = useState<any>({
    id: null,
    title: "",
    company: "",
    profile: "",
    location: "",
    working_day: "",
    description: "",
    experience: "",
    posted: "",
  });

  const loadData = async () => {
    const res = await apiClient.get("/api/careers");

    setIntro(res.data.intro || {});
    setHappy(res.data.happy || {});
    setVideos(res.data.videos || []);
    setJobs(res.data.jobs || []);
  };

  useEffect(() => {
    loadData();
  }, []);

  // IMAGE UPLOAD
  const uploadImage = async (file: File, field: string) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "careers");

    const res = await apiClient.post("/api/upload", formData);

    const data = await res.data;

    setIntro({ ...intro, [field]: data.url });
  };

  // UPDATE INTRO
  const updateIntro = async () => {
    try {
      await apiClient.put("/api/careers", {
        type: "intro",
        ...intro,
      });
      alert("Career Intro Updated");
    } catch (error) {
      console.error("Failed to update intro", error);
    }
  };

  // UPDATE HAPPY SECTION
  const updateHappy = async () => {
    try {
      await apiClient.put("/api/careers", {
        type: "happy",
        ...happy,
      });
      alert("Happy Workplace Updated");
    } catch (error) {
      console.error("Failed to update happy section", error);
    }
  };

  // ADD VIDEO
  const addVideo = async () => {
    try {
      await apiClient.post("/api/careers", {
        type: "video",
        video_url: videoUrl,
      });
      setVideoUrl("");
      loadData();
    } catch (error) {
      console.error("Failed to add video", error);
    }
  };

  // DELETE VIDEO
  const deleteVideo = async (id: number) => {
    try {
      // Axios DELETE supports params in the config object
      await apiClient.delete("/api/careers", {
        params: { id, type: "video" },
      });
      loadData();
    } catch (error) {
      console.error("Failed to delete video", error);
    }
  };

  // JOB SAVE (Handles both Create and Update)
  const saveJob = async () => {
    try {
      const payload = { type: "job", ...jobForm };

      if (jobForm.id) {
        await apiClient.put("/api/careers", payload);
      } else {
        await apiClient.post("/api/careers", payload);
      }

      resetJobForm();
      loadData();
    } catch (error) {
      console.error("Failed to save job", error);
    }
  };

  const editJob = (job: any) => {
    setJobForm(job);
  };

  const deleteJob = async (id: number) => {
    // Confirm with the user before destructive actions
    if (!confirm("Are you sure you want to delete this job listing?")) return;

    try {
      // We use the params object to send ?id=X&type=job
      await apiClient.delete("/api/careers", {
        params: {
          id,
          type: "job",
        },
      });

      // Refresh the list after successful deletion
      loadData();
    } catch (error: any) {
      console.error(
        "Delete job failed:",
        error.response?.data || error.message
      );
      // The apiClient interceptor handles 401s, but you can handle
      // other errors (like 403 Forbidden or 500) here.
    }
  };

  const resetJobForm = () => {
    setJobForm({
      id: null,
      title: "",
      company: "",
      profile: "",
      location: "",
      working_day: "",
      description: "",
      experience: "",
      posted: "",
    });
  };

  return (
    <Grid container spacing={3}>
      {/* CAREER INTRO */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Career Intro Section</Typography>

          <TextField
            label="Heading"
            fullWidth
            sx={{ my: 1 }}
            value={intro.heading_before || ""}
            onChange={(e) => setIntro({ ...intro, heading: e.target.value })}
          />

          <TextField
            label="Highlight Word"
            fullWidth
            sx={{ my: 1 }}
            value={intro.heading_highlight || ""}
            onChange={(e) =>
              setIntro({
                ...intro,
                heading_highlight: e.target.value,
              })
            }
          />

          <TextField
            label="Heading Last Part"
            fullWidth
            sx={{ my: 1 }}
            value={intro.heading_after || ""}
            onChange={(e) =>
              setIntro({ ...intro, heading_after: e.target.value })
            }
          />

          <TextField
            label="Description 1"
            fullWidth
            multiline
            rows={2}
            sx={{ my: 1 }}
            value={intro.description1 || ""}
            onChange={(e) =>
              setIntro({
                ...intro,
                description1: e.target.value,
              })
            }
          />

          <TextField
            label="Description 2"
            fullWidth
            multiline
            rows={2}
            sx={{ my: 1 }}
            value={intro.description2 || ""}
            onChange={(e) =>
              setIntro({
                ...intro,
                description2: e.target.value,
              })
            }
          />

          <input
            type="file"
            onChange={(e) => uploadImage(e.target.files![0], "image1")}
          />

          {intro.image1 && <img src={intro.image1} width={120} />}

          <input
            type="file"
            onChange={(e) => uploadImage(e.target.files![0], "image2")}
          />

          {intro.image2 && <img src={intro.image2} width={120} />}

          <Button variant="contained" sx={{ mt: 2 }} onClick={updateIntro}>
            Update Intro
          </Button>
        </Paper>
      </Grid>

      {/* HAPPY WORKPLACE */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Happy Workplace</Typography>

          <TextField
            label="Heading"
            fullWidth
            sx={{ my: 1 }}
            value={happy.heading || ""}
            onChange={(e) => setHappy({ ...happy, heading: e.target.value })}
          />

          <TextField
            label="Highlight Word"
            fullWidth
            sx={{ my: 1 }}
            value={happy.highlight_word || ""}
            onChange={(e) =>
              setHappy({
                ...happy,
                highlight_word: e.target.value,
              })
            }
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            sx={{ my: 1 }}
            value={happy.description || ""}
            onChange={(e) =>
              setHappy({
                ...happy,
                description: e.target.value,
              })
            }
          />

          <Button variant="contained" onClick={updateHappy}>
            Update Section
          </Button>
        </Paper>
      </Grid>

      {/* VIDEOS */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Career Videos</Typography>

          <TextField
            label="Video Embed URL"
            fullWidth
            sx={{ my: 1 }}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />

          <Button variant="contained" onClick={addVideo}>
            Add Video
          </Button>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {videos.map((v) => (
              <Grid item md={3} key={v.id}>
                <iframe width="100%" height="150" src={v.video_url} />

                <IconButton color="error" onClick={() => deleteVideo(v.id)}>
                  <Delete />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>

      {/* JOB FORM */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">
            {jobForm.id ? "Edit Job" : "Add Job"}
          </Typography>

          {[
            "title",
            "company",
            "profile",
            "location",
            "working_day",
            "experience",
            "posted",
          ].map((field) => (
            <TextField
              key={field}
              label={field.replace("_", " ")}
              fullWidth
              sx={{ my: 1 }}
              value={jobForm[field] || ""}
              onChange={(e) =>
                setJobForm({
                  ...jobForm,
                  [field]: e.target.value,
                })
              }
            />
          ))}

          <TextField
            label="Description"
            multiline
            rows={3}
            fullWidth
            sx={{ my: 1 }}
            value={jobForm.description || ""}
            onChange={(e) =>
              setJobForm({
                ...jobForm,
                description: e.target.value,
              })
            }
          />

          <Button variant="contained" onClick={saveJob}>
            {jobForm.id ? "Update Job" : "Add Job"}
          </Button>

          {jobForm.id && (
            <Button sx={{ ml: 2 }} onClick={resetJobForm}>
              Cancel
            </Button>
          )}
        </Paper>
      </Grid>

      {/* JOB LIST */}
      {jobs.map((job) => (
        <Grid item md={6} key={job.id}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">{job.title}</Typography>

            <Typography>
              {job.company} | {job.location}
            </Typography>

            <Typography variant="body2">{job.description}</Typography>

            <IconButton color="primary" onClick={() => editJob(job)}>
              <Edit />
            </IconButton>

            <IconButton color="error" onClick={() => deleteJob(job.id)}>
              <Delete />
            </IconButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
