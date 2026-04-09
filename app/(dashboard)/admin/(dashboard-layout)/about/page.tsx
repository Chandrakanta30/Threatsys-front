"use client";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import {
  Paper,
  Typography,
  TextField,
  IconButton,
  Button,
  Box,
  CircularProgress,
  Divider,
  Container,
} from "@mui/material";
import {
  AddCircle,
  RemoveCircle,
  CloudUpload,
  Delete,
  Save,
} from "@mui/icons-material";
import apiClient from "@/app/lib/apiClient";
import Grid from "@mui/material/GridLegacy";

/** --- CONFIGURATION --- **/
const BASE_URL = "";

/** --- INTERFACES BASED ON YOUR JSON --- **/
interface StatItem {
  number: string;
  label: string;
  icon: string;
}
interface MissionItem {
  title: string;
  description: string;
  icon: string;
}
interface FaqItem {
  question: string;
  answer: string;
}

interface AboutUsForm {
  banner_heading: string;
  intro_heading: string;
  intro_subheading: string;
  intro_paragraph1: string;
  intro_paragraph2: string;
  intro_experience_years: number;
  intro_images: string[];
  stats: StatItem[];
  mission_items: MissionItem[];
  faqs: FaqItem[];
  client_logos: string[]; // Updated to simple string array based on your JSON
}

/** --- UPLOAD HELPER --- **/
const handleFileUpload = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", "about-us");
  const res = await apiClient.post("/api/upload", formData);
  return res.data.url;
};

export default function AdminAboutUs() {
  const { register, control, handleSubmit, reset, setValue, watch } =
    useForm<AboutUsForm>();
  const [uploadingField, setUploadingField] = useState<string | null>(null);

  const statsArray = useFieldArray({ control, name: "stats" });
  const missionArray = useFieldArray({ control, name: "mission_items" });
  const faqArray = useFieldArray({ control, name: "faqs" });
  const logosArray = useFieldArray({ control, name: "client_logos" as any });

  useEffect(() => {
    apiClient
      .get("/api/about-us")
      .then((res) => reset(res.data))
      .catch((err) => console.error("Load Error:", err));
  }, [reset]);

  const onFileSelect = async (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingField(path);
    try {
      const url = await handleFileUpload(file);
      setValue(path as any, url);
    } catch (err) {
      alert("Upload failed");
    } finally {
      setUploadingField(null);
    }
  };

  const onSubmit: SubmitHandler<AboutUsForm> = async (data) => {
    try {
      await apiClient.put("/api/about-us", data);
      alert("Content updated successfully!");
    } catch (err) {
      alert("Save failed");
    }
  };

  /** --- REUSABLE PREVIEW COMPONENT --- **/
  const PreviewBox = ({
    label,
    path,
    height = 120,
  }: {
    label: string;
    path: string;
    height?: number;
  }) => {
    const currentUrl = watch(path as any);
    const isUploading = uploadingField === path;
    const fullUrl = currentUrl
      ? currentUrl.startsWith("http")
        ? currentUrl
        : `${BASE_URL}${currentUrl}`
      : "";

    return (
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="caption"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          {label}
        </Typography>
        <Box
          sx={{
            height,
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
          ) : currentUrl ? (
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
                onError={(e: any) =>
                  (e.target.src = "https://via.placeholder.com/100?text=Error")
                }
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.4)",
                  opacity: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.2s",
                  "&:hover": { opacity: 1 },
                }}
              >
                <Button variant="contained" component="label" size="small">
                  Change
                  <input
                    type="file"
                    hidden
                    onChange={(e) => onFileSelect(e, path)}
                    accept="image/*"
                  />
                </Button>
              </Box>
            </>
          ) : (
            <IconButton component="label" color="primary">
              <CloudUpload />
              <input
                type="file"
                hidden
                onChange={(e) => onFileSelect(e, path)}
                accept="image/*"
              />
            </IconButton>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" justifyContent="space-between" sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="800">
            About Us Content
          </Typography>
          <Button
            type="submit"
            variant="contained"
            startIcon={<Save />}
            size="large"
          >
            Save All Changes
          </Button>
        </Box>

        <Grid container spacing={3}>
          {/* Main Content Section */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Header & Introduction
              </Typography>
              <TextField
                {...register("banner_heading")}
                label="Banner Heading"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    {...register("intro_heading")}
                    label="Intro Heading"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    {...register("intro_experience_years")}
                    label="Exp. Years"
                    type="number"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <TextField
                {...register("intro_subheading")}
                label="Sub-heading"
                fullWidth
                sx={{ my: 2 }}
              />
              <TextField
                {...register("intro_paragraph1")}
                label="Paragraph 1"
                multiline
                rows={3}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                {...register("intro_paragraph2")}
                label="Paragraph 2"
                multiline
                rows={3}
                fullWidth
              />
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Vision, Mission & Values
              </Typography>
              {missionArray.fields.map((field, index) => (
                <Box
                  key={field.id}
                  sx={{
                    p: 2,
                    mb: 2,
                    border: "1px solid #eee",
                    borderRadius: 2,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <PreviewBox
                        label="Icon"
                        path={`mission_items.${index}.icon`}
                        height={100}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        {...register(`mission_items.${index}.title`)}
                        label="Title"
                        fullWidth
                        sx={{ mb: 1 }}
                      />
                      <TextField
                        {...register(`mission_items.${index}.description`)}
                        label="Description"
                        fullWidth
                        multiline
                        rows={2}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        color="error"
                        onClick={() => missionArray.remove(index)}
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              ))}
              <Button
                startIcon={<AddCircle />}
                onClick={() =>
                  missionArray.append({ title: "", description: "", icon: "" })
                }
              >
                Add Item
              </Button>
            </Paper>
          </Grid>

          {/* Sidebar: Images & Stats */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Intro Images
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <PreviewBox
                    label="Image 1"
                    path="intro_images.0"
                    height={180}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PreviewBox
                    label="Image 2"
                    path="intro_images.1"
                    height={180}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Counter Statistics
              </Typography>
              {statsArray.fields.map((field, index) => (
                <Grid
                  container
                  spacing={2}
                  key={field.id}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Grid item xs={2}>
                    <PreviewBox
                      label="Icon"
                      path={`stats.${index}.icon`}
                      height={50}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`stats.${index}.number`)}
                      label="Value"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      {...register(`stats.${index}.label`)}
                      label="Label"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      color="error"
                      onClick={() => statsArray.remove(index)}
                    >
                      <RemoveCircle />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button
                startIcon={<AddCircle />}
                onClick={() =>
                  statsArray.append({ number: "", label: "", icon: "" })
                }
                fullWidth
              >
                Add Stat
              </Button>
            </Paper>
          </Grid>

          {/* Client Logos Section */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Client Logos
              </Typography>
              <Grid container spacing={2}>
                {logosArray.fields.map((field, index) => (
                  <Grid
                    item
                    xs={4}
                    sm={2}
                    key={field.id}
                    sx={{ textAlign: "center" }}
                  >
                    <PreviewBox
                      label={`Logo ${index + 1}`}
                      path={`client_logos.${index}`}
                      height={80}
                    />
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => logosArray.remove(index)}
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                ))}
                <Grid item xs={4} sm={2}>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{ height: 80, borderStyle: "dashed" }}
                    onClick={() => logosArray.append("")}
                  >
                    + Add
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
