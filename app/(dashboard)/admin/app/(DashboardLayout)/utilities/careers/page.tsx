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
    const res = await axios.get("/api/careers");

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

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setIntro({ ...intro, [field]: data.url });
  };

  // UPDATE INTRO
  const updateIntro = async () => {
    await axios.put("/api/careers", {
      type: "intro",
      ...intro,
    });

    alert("Career Intro Updated");
  };

  // UPDATE HAPPY SECTION
  const updateHappy = async () => {
    await axios.put("/api/careers", {
      type: "happy",
      ...happy,
    });

    alert("Happy Workplace Updated");
  };

  // ADD VIDEO
  const addVideo = async () => {
    await axios.post("/api/careers", {
      type: "video",
      video_url: videoUrl,
    });

    setVideoUrl("");
    loadData();
  };

  const deleteVideo = async (id: number) => {
    await axios.delete(`/api/careers?id=${id}&type=video`);
    loadData();
  };

  // JOB SAVE
  const saveJob = async () => {
    if (jobForm.id) {
      await axios.put("/api/careers", {
        type: "job",
        ...jobForm,
      });
    } else {
      await axios.post("/api/careers", {
        type: "job",
        ...jobForm,
      });
    }

    resetJobForm();
    loadData();
  };

  const editJob = (job: any) => {
    setJobForm(job);
  };

  const deleteJob = async (id: number) => {
    await axios.delete(`/api/careers?id=${id}&type=job`);
    loadData();
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
