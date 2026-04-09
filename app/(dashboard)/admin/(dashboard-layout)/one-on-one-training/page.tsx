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

export default function OneOnOneAdmin() {
  const [header, setHeader] = useState<any>({});
  const [benefits, setBenefits] = useState<any[]>([]);
  const [progress, setProgress] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [uploadingField, setUploadingField] = useState<string | null>(null);

  const loadData = async () => {
    try {
      const [h, b, p, f] = await Promise.all([
        apiClient.get("/api/one-on-one/header"),
        apiClient.get("/api/one-on-one/benefits"),
        apiClient.get("/api/one-on-one/progress"),
        apiClient.get("/api/one-on-one/faqs"),
      ]);
      setHeader(h.data || {});
      setBenefits(b.data || []);
      setProgress(p.data || []);
      setFaqs(f.data || []);
    } catch (err) {
      console.error("Failed to load 1-on-1 data", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  /** --- IMAGE UPLOAD LOGIC --- **/
  const handleImageUpload = async (
    file: File,
    section: string,
    index: number,
    fieldName: string
  ) => {
    const uploadKey = `${section}-${index}`;
    setUploadingField(uploadKey);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "one-on-one");
      const res = await apiClient.post("/api/upload", formData);

      const url = res.data.url;
      if (section === "benefits") {
        const updated = [...benefits];
        updated[index][fieldName] = url;
        setBenefits(updated);
      } else if (section === "progress") {
        const updated = [...progress];
        updated[index][fieldName] = url;
        setProgress(updated);
      }
    } catch (err) {
      alert("Upload failed");
    } finally {
      setUploadingField(null);
    }
  };

  /** --- UI HELPER: PREVIEW BOX --- **/
  const ImagePreview = ({ label, url, onUpload, uploadKey }: any) => {
    const isUploading = uploadingField === uploadKey;
    const fullUrl = url;

    return (
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" fontWeight="bold" color="textSecondary">
          {label}
        </Typography>
        <Box
          sx={{
            height: 80,
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
                    onChange={(e) =>
                      e.target.files?.[0] && onUpload(e.target.files[0])
                    }
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
                onChange={(e) =>
                  e.target.files?.[0] && onUpload(e.target.files[0])
                }
                accept="image/*"
              />
            </IconButton>
          )}
        </Box>
      </Box>
    );
  };

  /** --- SAVE HANDLERS --- **/
  const saveHeader = async () => {
    const method = header.id ? "put" : "post";
    await apiClient[method]("/api/one-on-one/header", header);
    alert("Header Saved");
    loadData();
  };

  const saveBenefits = async () => {
    for (const b of benefits) {
      const method = b.id ? "put" : "post";
      await apiClient[method]("/api/one-on-one/benefits", b);
    }
    alert("Benefits Saved");
    loadData();
  };

  const saveProgress = async () => {
    for (const p of progress) {
      const method = p.id ? "put" : "post";
      await apiClient[method]("/api/one-on-one/progress", p);
    }
    alert("Progress Saved");
    loadData();
  };

  const saveFaqs = async () => {
    for (const f of faqs) {
      const method = f.id ? "put" : "post";
      await apiClient[method]("/api/one-on-one/faqs", f);
    }
    alert("FAQs Saved");
    loadData();
  };

  const removeItem = async (section: string, row: any, index: number) => {
    if (row.id) {
      await apiClient.delete(`/api/one-on-one/${section}?id=${row.id}`);
    }
    if (section === "benefits")
      setBenefits(benefits.filter((_, i) => i !== index));
    if (section === "progress")
      setProgress(progress.filter((_, i) => i !== index));
    if (section === "faqs") setFaqs(faqs.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="800" mb={4}>
        1-on-1 Training Page CMS
      </Typography>

      <Grid container spacing={4}>
        {/* 1. HEADER SECTION */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Why Choose Section
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Heading"
                    fullWidth
                    value={header.heading || ""}
                    onChange={(e) =>
                      setHeader({ ...header, heading: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Highlight"
                    fullWidth
                    value={header.highlight_text || ""}
                    onChange={(e) =>
                      setHeader({ ...header, highlight_text: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Button Text"
                    fullWidth
                    value={header.button_text || ""}
                    onChange={(e) =>
                      setHeader({ ...header, button_text: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    fullWidth
                    multiline
                    rows={3}
                    value={header.description || ""}
                    onChange={(e) =>
                      setHeader({ ...header, description: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{ mt: 2 }}
                onClick={saveHeader}
              >
                Save Header
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 2. BENEFITS SLIDER */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Benefits Slider
              </Typography>
              <Divider sx={{ mb: 3 }} />
              {benefits.map((item, index) => (
                <Paper
                  variant="outlined"
                  key={index}
                  sx={{ p: 2, mb: 2, bgcolor: "#fff" }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={2}>
                      <ImagePreview
                        label="Icon"
                        url={item.img}
                        uploadKey={`benefits-${index}`}
                        onUpload={(file: File) =>
                          handleImageUpload(file, "benefits", index, "img")
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextField
                        label="Benefit Text"
                        fullWidth
                        multiline
                        rows={2}
                        value={item.text}
                        onChange={(e) => {
                          const updated = [...benefits];
                          updated[index].text = e.target.value;
                          setBenefits(updated);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <IconButton
                        color="error"
                        onClick={() => removeItem("benefits", item, index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() =>
                    setBenefits([...benefits, { img: "", text: "" }])
                  }
                >
                  Add Benefit
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SaveIcon />}
                  onClick={saveBenefits}
                >
                  Save All Benefits
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* 3. PROGRESS ICONS */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Progress Steps
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Grid container spacing={2}>
                {progress.map((item, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                          <ImagePreview
                            label="Step Icon"
                            url={item.img}
                            uploadKey={`progress-${index}`}
                            onUpload={(file: File) =>
                              handleImageUpload(file, "progress", index, "img")
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Label"
                            fullWidth
                            value={item.label}
                            onChange={(e) => {
                              const updated = [...progress];
                              updated[index].label = e.target.value;
                              setProgress(updated);
                            }}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton
                            color="error"
                            onClick={() => removeItem("progress", item, index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() =>
                    setProgress([...progress, { img: "", label: "" }])
                  }
                >
                  Add Step
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SaveIcon />}
                  onClick={saveProgress}
                >
                  Save Progress Steps
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* 4. FAQ SECTION */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Frequently Asked Questions
              </Typography>
              <Divider sx={{ mb: 3 }} />
              {faqs.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 3,
                    p: 2,
                    border: "1px solid #eee",
                    borderRadius: 2,
                  }}
                >
                  <Grid container spacing={2} alignItems="flex-start">
                    <Grid item xs={12} md={5}>
                      <TextField
                        label="Question"
                        fullWidth
                        value={item.question}
                        onChange={(e) => {
                          const updated = [...faqs];
                          updated[index].question = e.target.value;
                          setFaqs(updated);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Answer"
                        fullWidth
                        multiline
                        rows={2}
                        value={item.answer}
                        onChange={(e) => {
                          const updated = [...faqs];
                          updated[index].answer = e.target.value;
                          setFaqs(updated);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ textAlign: "center" }}>
                      <IconButton
                        color="error"
                        onClick={() => removeItem("faqs", item, index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              ))}
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() =>
                    setFaqs([...faqs, { question: "", answer: "" }])
                  }
                >
                  Add FAQ
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SaveIcon />}
                  onClick={saveFaqs}
                >
                  Save All FAQs
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
