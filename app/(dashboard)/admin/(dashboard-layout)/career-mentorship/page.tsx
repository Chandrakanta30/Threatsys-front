"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  CircularProgress,
  Stack,
  Paper,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  CloudUpload as CloudUploadIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";
import apiClient from "@/app/lib/apiClient";

export default function CareerMentorshipCMS() {
  const [intro, setIntro] = useState<any>({});
  const [journey, setJourney] = useState<any[]>([]);
  const [featureIntro, setFeatureIntro] = useState<any>({});
  const [features, setFeatures] = useState<any[]>([]);
  const [steps, setSteps] = useState<any[]>([]);
  const [uploadingField, setUploadingField] = useState<string | null>(null);

  const loadData = async () => {
    try {
      const introRes = await apiClient.get("/api/careermentorship/intro");
      setIntro(introRes.data.intro || {});
      setFeatureIntro(introRes.data.featureIntro || {});

      const journeyRes = await apiClient.get("/api/careermentorship/journey");
      setJourney(journeyRes.data || []);

      const featuresRes = await apiClient.get("/api/careermentorship/items", {
        params: { section: "steps" },
      });
      setFeatures(featuresRes.data || []);

      const stepsRes = await apiClient.get("/api/careermentorship/items", {
        params: { section: "registration" },
      });
      setSteps(stepsRes.data || []);
    } catch (err) {
      console.error("Failed to load data", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  /** --- IMAGE UPLOAD LOGIC --- **/
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
    index?: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadKey = index !== undefined ? `${type}-${index}` : type;
    setUploadingField(uploadKey);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "career-mentorship");

    try {
      const res = await apiClient.post("/api/upload", formData);
      const url = res.data.url;

      if (type === "main") setIntro({ ...intro, image: url });
      if (type === "journey" && index !== undefined) {
        const updated = [...journey];
        updated[index].icon = url;
        setJourney(updated);
      }
      if (type === "feature-item" && index !== undefined) {
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
    } finally {
      setUploadingField(null);
    }
  };

  /** --- UI HELPER: PREVIEW BOX --- **/
  const ImagePreview = ({ label, url, uploadKey, type, index }: any) => {
    const isUploading = uploadingField === uploadKey;
    const fullUrl = url;

    return (
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" fontWeight="bold" color="textSecondary">
          {label}
        </Typography>
        <Box
          sx={{
            height: 60,
            border: "1px dashed #ccc",
            borderRadius: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fbfbfb",
            overflow: "hidden",
          }}
        >
          {isUploading ? (
            <CircularProgress size={20} />
          ) : url ? (
            <>
              <Box
                component="img"
                src={fullUrl}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  p: 1,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.4)",
                  opacity: 0,
                  transition: "0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": { opacity: 1 },
                }}
              >
                <Button variant="contained" component="label" size="small">
                  Change{" "}
                  <input
                    type="file"
                    hidden
                    onChange={(e) => handleFileUpload(e, type, index)}
                    accept="image/*"
                  />
                </Button>
              </Box>
            </>
          ) : (
            <IconButton component="label" color="primary">
              <CloudUploadIcon />{" "}
              <input
                type="file"
                hidden
                onChange={(e) => handleFileUpload(e, type, index)}
                accept="image/*"
              />
            </IconButton>
          )}
        </Box>
      </Box>
    );
  };

  /** --- SAVING LOGIC --- **/
  const saveIntroSection = async (data: any, type: "main" | "feature") => {
    await apiClient.post("/api/careermentorship/intro", { ...data, type });
    alert(`${type === "main" ? "Main Intro" : "Feature Intro"} saved!`);
    loadData();
  };

  const saveJourney = async () => {
    const promises = journey.map((j) =>
      apiClient.post("/api/careermentorship/journey", j)
    );
    await Promise.all(promises);
    alert("Journey cards updated!");
    loadData();
  };

  const saveItems = async (items: any[], section: "steps" | "registration") => {
    for (const item of items) {
      await apiClient.post("/api/careermentorship/items", { ...item, section });
    }
    alert("Section updated!");
    loadData();
  };

  const removeItem = async (
    id: any,
    index: number,
    state: any[],
    setState: any,
    endpoint: string
  ) => {
    if (id) await apiClient.delete(`${endpoint}?id=${id}`);
    setState(state.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h4" fontWeight="800" mb={4}>
        Career Mentorship CMS
      </Typography>

      <Grid container spacing={4}>
        {/* 1. MAIN BANNER */}
        <Grid item xs={12}>
          <Card variant="outlined" elevation={0}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Main Banner Intro
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <ImagePreview
                    label="Banner Image"
                    url={intro.image}
                    uploadKey="main"
                    type="main"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Heading"
                    value={intro.heading || ""}
                    onChange={(e) =>
                      setIntro({ ...intro, heading: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Highlight Word"
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
              </Grid>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{ mt: 2 }}
                onClick={() => saveIntroSection(intro, "main")}
              >
                Save Banner
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 2. JOURNEY CARDS */}
        <Grid item xs={12}>
          <Card variant="outlined" elevation={0}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Journey Cards
              </Typography>
              <Divider sx={{ my: 2 }} />
              {journey.map((j, index) => (
                <Paper variant="outlined" key={index} sx={{ p: 2, mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={2}>
                      <ImagePreview
                        label="Icon"
                        url={j.icon}
                        uploadKey={`journey-${index}`}
                        type="journey"
                        index={index}
                      />
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
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Text"
                        multiline
                        rows={2}
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
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
              <Stack direction="row" spacing={2}>
                <Button
                  startIcon={<AddIcon />}
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
                <Button
                  variant="contained"
                  color="success"
                  onClick={saveJourney}
                >
                  Save All Journey Cards
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* 3. FEATURE INTRO */}
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Mid-Page Feature Intro
              </Typography>
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

        {/* 4. FEATURE & REGISTRATION ITEMS */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Small Feature Cards
              </Typography>
              <Divider sx={{ my: 2 }} />
              {features.map((f, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Box sx={{ width: 80 }}>
                    <ImagePreview
                      label="Icon"
                      url={f.icon}
                      uploadKey={`feature-item-${index}`}
                      type="feature-item"
                      index={index}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Title"
                    size="small"
                    value={f.text}
                    onChange={(e) => {
                      const updated = [...features];
                      updated[index].title = e.target.value;
                      setFeatures(updated);
                    }}
                  />
                  <IconButton
                    color="error"
                    onClick={() =>
                      removeItem(
                        f.id,
                        index,
                        features,
                        setFeatures,
                        "/api/careermentorship/items"
                      )
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              ))}
              <Button
                startIcon={<AddIcon />}
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
                variant="contained"
                color="success"
                sx={{ ml: 2 }}
                onClick={() => saveItems(features, "steps")}
              >
                Save Features
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Registration Steps
              </Typography>
              <Divider sx={{ my: 2 }} />
              {steps?.map((s, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Box sx={{ width: 80 }}>
                    <ImagePreview
                      label="Icon"
                      url={s.icon}
                      uploadKey={`step-${index}`}
                      type="step"
                      index={index}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Step Text"
                    size="small"
                    value={s.title}
                    onChange={(e) => {
                      const updated = [...steps];
                      updated[index].title = e.target.value;
                      setSteps(updated);
                    }}
                  />
                  <IconButton
                    color="error"
                    onClick={() =>
                      removeItem(
                        s.id,
                        index,
                        steps,
                        setSteps,
                        "/api/careermentorship/items"
                      )
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() =>
                  setSteps([
                    ...steps,
                    { icon: "", title: "", position: steps.length + 1 },
                  ])
                }
              >
                Add Step
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ ml: 2 }}
                onClick={() => saveItems(steps, "registration")}
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
