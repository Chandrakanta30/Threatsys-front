"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Delete, Add, Save } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function CareerMentorshipCMS() {
  const [intro, setIntro] = useState<any>({});
  const [journey, setJourney] = useState<any[]>([]);
  const [featureIntro, setFeatureIntro] = useState<any>({});
  const [features, setFeatures] = useState<any[]>([]);
  const [steps, setSteps] = useState<any[]>([]);

  const loadData = async () => {
    try {
      // 1. Load Intros
      const introRes = await axios.get("/api/careermentorship/intro");
      setIntro(introRes.data.intro || {});
      setFeatureIntro(introRes.data.featureIntro || {});

      // 2. Load Journey
      const journeyRes = await axios.get("/api/careermentorship/journey");
      setJourney(journeyRes.data || []);

      // 3. Load Items (Features and Steps)
      // Note: If you don't have a consolidated GET for items,
      // keep using your individual section endpoints
      const featuresRes = await axios.get(
        "/api/careermentorship/items?section=steps"
      );
      setFeatures(featuresRes.data || []);

      const stepsRes = await axios.get(
        "/api/careermentorship/items?section=registration"
      );
      setSteps(stepsRes.data[0] || []);
    } catch (err) {
      console.error("Failed to load data", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  /* ---------------- SAVING LOGIC ---------------- */

  // Reusable function for both Intro and Feature Intro
  const saveIntroSection = async (data: any, type: "main" | "feature") => {
    try {
      await axios.post("/api/careermentorship/intro", { ...data, type });
      alert(`${type === "main" ? "Main Intro" : "Feature Intro"} saved!`);
      loadData();
    } catch (err) {
      alert("Error saving intro section");
    }
  };

  const saveJourney = async () => {
    try {
      for (const j of journey) {
        await axios.post("/api/careermentorship/journey", j);
      }
      alert("Journey cards updated!");
      loadData();
    } catch (err) {
      alert("Error saving journey cards");
    }
  };

  const saveItems = async (items: any[], section: "features" | "steps") => {
    try {
      for (const item of items) {
        // Consolidated endpoint for features/steps
        await axios.post("/api/careermentorship/items", { ...item, section });
      }
      alert(`${section.charAt(0).toUpperCase() + section.slice(1)} updated!`);
      loadData();
    } catch (err) {
      alert(`Error saving ${section}`);
    }
  };

  /* ---------------- DELETE LOGIC ---------------- */

  const removeItem = async (
    id: any,
    index: number,
    state: any[],
    setState: any,
    endpoint: string
  ) => {
    if (id) {
      await axios.delete(`${endpoint}?id=${id}`);
    }
    setState(state.filter((_, i) => i !== index));
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
    index?: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/upload", formData);
      const url = res.data.url;

      if (type === "main") setIntro({ ...intro, image: url });
      if (type === "journey" && index !== undefined) {
        const updated = [...journey];
        updated[index].icon = url;
        setJourney(updated);
      }
      if (type === "feature" && index !== undefined) {
        const updated = [...features];
        updated[index].icon = url;
        setFeatures(updated);
      }
      if (type === "step" && index !== undefined) {
        const updated = [...steps];
        updated[index].icon = url;
        setSteps(updated);
      }
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Career Mentorship CMS
      </Typography>

      <Grid container spacing={4}>
        {/* MAIN INTRO */}
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Main Banner Intro</Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Heading"
                    value={intro.heading || ""}
                    onChange={(e) =>
                      setIntro({ ...intro, heading: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Highlight Text (Word to make Blue)"
                    value={intro.highlight_text || ""}
                    onChange={(e) =>
                      setIntro({ ...intro, highlight_text: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Subheading"
                    value={intro.subheading || ""}
                    onChange={(e) =>
                      setIntro({ ...intro, subheading: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Button Text"
                    value={intro.button_text || ""}
                    onChange={(e) =>
                      setIntro({ ...intro, button_text: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="Description"
                    value={intro.description || ""}
                    onChange={(e) =>
                      setIntro({ ...intro, description: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField
                    fullWidth
                    label="Image Path (e.g. /images/career-img.png)"
                    value={intro.image || ""}
                    onChange={(e) =>
                      setIntro({ ...intro, image: e.target.value })
                    }
                  /> */}

                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        border: "1px solid #ccc",
                        p: 1,
                        borderRadius: 1,
                      }}
                    >
                      <Button variant="outlined" component="label">
                        Upload Banner Image
                        <input
                          type="file"
                          hidden
                          onChange={(e) => handleFileUpload(e, "main")}
                        />
                      </Button>
                      <Typography variant="caption">
                        {intro.image || "No file chosen"}
                      </Typography>
                      {intro.image && (
                        <img
                          src={intro.image}
                          alt="preview"
                          style={{ height: 40, borderRadius: 4 }}
                        />
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                startIcon={<Save />}
                sx={{ mt: 2 }}
                onClick={() => saveIntroSection(intro, "main")}
              >
                Save Main Banner
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* JOURNEY CARDS */}
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Journey Cards</Typography>
              <Divider sx={{ my: 2 }} />
              {journey.map((j, index) => (
                <Grid
                  container
                  spacing={2}
                  key={index}
                  sx={{ mb: 2, alignItems: "center" }}
                >
                  <Grid item xs={12} md={3}>
                    {/* <TextField
                      fullWidth
                      label="Icon URL"
                      value={j.icon}
                      onChange={(e) => {
                        const updated = [...journey];
                        updated[index].icon = e.target.value;
                        setJourney(updated);
                      }}
                    /> */}

                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          border: "1px solid #ccc",
                          p: 1,
                          borderRadius: 1,
                        }}
                      >
                        <Button variant="outlined" component="label">
                          Upload Icon Image
                          <input
                            type="file"
                            hidden
                            onChange={(e) => handleFileUpload(e, "journey")}
                          />
                        </Button>
                        <Typography variant="caption">
                          {j.icon || "No file chosen"}
                        </Typography>
                        {j.icon && (
                          <img
                            src={j.icon}
                            alt="preview"
                            style={{ height: 40, borderRadius: 4 }}
                          />
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      label="Title"
                      value={j.title}
                      onChange={(e) => {
                        const updated = [...journey];
                        updated[index].title = e.target.value;
                        setJourney(updated);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <TextField
                      fullWidth
                      label="Description Text"
                      value={j.text}
                      onChange={(e) => {
                        const updated = [...journey];
                        updated[index].text = e.target.value;
                        setJourney(updated);
                      }}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton
                      color="error"
                      onClick={() =>
                        removeItem(
                          j.id,
                          index,
                          journey,
                          setJourney,
                          "/api/careermentorship/journey"
                        )
                      }
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button
                startIcon={<Add />}
                onClick={() =>
                  setJourney([
                    ...journey,
                    {
                      icon: "",
                      title: "",
                      text: "",
                      position: journey.length + 1,
                    },
                  ])
                }
              >
                Add Journey Card
              </Button>
              <Button variant="contained" sx={{ ml: 2 }} onClick={saveJourney}>
                Save All Cards
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* FEATURE INTRO */}
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Mid-Page Feature Intro</Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Heading"
                    value={featureIntro.heading || ""}
                    onChange={(e) =>
                      setFeatureIntro({
                        ...featureIntro,
                        heading: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Highlight Word"
                    value={featureIntro.highlight_text || ""}
                    onChange={(e) =>
                      setFeatureIntro({
                        ...featureIntro,
                        highlight_text: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Button Text"
                    value={featureIntro.button_text || ""}
                    onChange={(e) =>
                      setFeatureIntro({
                        ...featureIntro,
                        button_text: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="Description"
                    value={featureIntro.description || ""}
                    onChange={(e) =>
                      setFeatureIntro({
                        ...featureIntro,
                        description: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => saveIntroSection(featureIntro, "feature")}
              >
                Save Feature Section
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* FEATURE CARDS */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Small Feature Cards</Typography>
              <Divider sx={{ my: 2 }} />
              {features.map((f, index) => (
                <Grid container spacing={1} key={index} sx={{ mb: 1 }}>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Icon"
                      size="small"
                      value={f.icon}
                      onChange={(e) => {
                        const updated = [...features];
                        updated[index].icon = e.target.value;
                        setFeatures(updated);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Title"
                      size="small"
                      value={f.title}
                      onChange={(e) => {
                        const updated = [...features];
                        updated[index].title = e.target.value;
                        setFeatures(updated);
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() =>
                        removeItem(
                          f.id,
                          index,
                          features,
                          setFeatures,
                          "/api/careermentorship/features"
                        )
                      }
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button
                size="small"
                startIcon={<Add />}
                onClick={() =>
                  setFeatures([
                    ...features,
                    { icon: "", title: "", position: features.length + 1 },
                  ])
                }
              >
                Add Feature
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{ ml: 1 }}
                onClick={() => saveItems(features, "features")}
              >
                Save Features
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* REGISTER STEPS */}
        <Grid item xs={12} md={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Registration Steps</Typography>
              <Divider sx={{ my: 2 }} />
              {steps.map((s, index) => (
                <Grid container spacing={1} key={index} sx={{ mb: 1 }}>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Icon"
                      size="small"
                      value={s.icon}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].icon = e.target.value;
                        setSteps(updated);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Text"
                      size="small"
                      value={s.title}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].title = e.target.value;
                        setSteps(updated);
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() =>
                        removeItem(
                          s.id,
                          index,
                          steps,
                          setSteps,
                          "/api/careermentorship/steps"
                        )
                      }
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button
                size="small"
                startIcon={<Add />}
                onClick={() =>
                  setSteps([
                    ...steps,
                    { icon: "", text: "", position: steps.length + 1 },
                  ])
                }
              >
                Add Step
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{ ml: 1 }}
                onClick={() => saveItems(steps, "steps")}
              >
                Save Steps
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
