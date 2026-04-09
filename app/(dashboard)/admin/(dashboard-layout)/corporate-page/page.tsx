"use client";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Box,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  CloudUpload as CloudUploadIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircleOutline as FeatureIcon,
  Save as SaveIcon,
  Business as LogoIcon,
  TrendingUp as StatsIcon,
  Collections as GalleryIcon,
  School as CourseIcon,
  HelpOutline as FaqIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";
import apiClient from "@/app/lib/apiClient";

const BASE_URL = "";

export default function CorporateAdminPage() {
  const [uploadingField, setUploadingField] = useState<string | null>(null);

  const { register, control, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      logos: [],
      stats: [],
      tabs: [],
      gallery: [],
      courses: [],
      faqs: [],
    },
  });

  // Field Arrays for dynamic sections
  const {
    fields: logoFields,
    append: addLogo,
    remove: removeLogo,
  } = useFieldArray({ control, name: "logos" });
  const {
    fields: statFields,
    append: addStat,
    remove: removeStat,
  } = useFieldArray({ control, name: "stats" });
  const { fields: tabFields, replace: replaceTabs } = useFieldArray({
    control,
    name: "tabs",
  });
  const {
    fields: galleryFields,
    append: addGallery,
    remove: removeGallery,
  } = useFieldArray({ control, name: "gallery" });
  const {
    fields: courseFields,
    append: addCourse,
    remove: removeCourse,
  } = useFieldArray({ control, name: "courses" });
  const {
    fields: faqFields,
    append: addFaq,
    remove: removeFaq,
  } = useFieldArray({ control, name: "faqs" });

  useEffect(() => {
    apiClient.get("/api/corporate-page").then((res) => {
      reset(res.data);
      if (res.data.tabs) replaceTabs(res.data.tabs);
    });
  }, [reset, replaceTabs]);

  const onFileSelect = async (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingField(path);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "corporate");
      const res = await apiClient.post("/api/upload", formData);
      setValue(path as any, res.data.url);
    } catch (err) {
      alert("Upload failed");
    } finally {
      setUploadingField(null);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      await apiClient.post("/api/corporate-page", data);
      alert("Page Updated Successfully!");
    } catch (error) {
      alert("Save failed.");
    }
  };

  /** --- REUSABLE PREVIEW COMPONENT --- **/
  const ImagePreview = ({ label, path, height = 80 }: any) => {
    const currentUrl = watch(path);
    const isUploading = uploadingField === path;
    const fullUrl = currentUrl;

    return (
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" fontWeight="bold" color="textSecondary">
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
                // onError={(e: any) =>
                //   (e.target.src = "https://via.placeholder.com/100?text=No+Img")
                // }
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
                    onChange={(e) => onFileSelect(e, path)}
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight="900">
          Corporate CMS
        </Typography>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSubmit(onSubmit)}
        >
          Save All Changes
        </Button>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1. GROWTH STATS */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography
              variant="h6"
              mb={2}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <StatsIcon color="primary" /> Growth Statistics
            </Typography>
            <Grid container spacing={2}>
              {statFields.map((item, index) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <ImagePreview
                          label="Icon"
                          path={`stats.${index}.icon`}
                          height={60}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          label="Number"
                          fullWidth
                          size="small"
                          {...register(`stats.${index}.number`)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          label="Text"
                          fullWidth
                          size="small"
                          {...register(`stats.${index}.text`)}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <IconButton
                          color="error"
                          onClick={() => removeStat(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Button
              startIcon={<AddIcon />}
              sx={{ mt: 2 }}
              onClick={() =>
                addStat({
                  icon: "",
                  number: "",
                  text: "",
                  page_slug: "corporate-training",
                })
              }
            >
              Add Stat
            </Button>
          </CardContent>
        </Card>

        {/* 2. COURSE TABS (EDUCATE/EXCEL/EMPOWER) */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Service Tabs
        </Typography>
        {tabFields.map((tab, tIdx) => (
          <Accordion key={tab.id} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                {watch(`tabs.${tIdx}.title`) || "New Tab"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <TextField
                      label="Title"
                      fullWidth
                      {...register(`tabs.${tIdx}.title`)}
                    />
                    <TextField
                      label="Badge Text"
                      fullWidth
                      {...register(`tabs.${tIdx}.badge`)}
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <ImagePreview
                          label="Icon"
                          path={`tabs.${tIdx}.icon`}
                          height={80}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <ImagePreview
                          label="Main Image"
                          path={`tabs.${tIdx}.image`}
                          height={80}
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      label="Description"
                      fullWidth
                      multiline
                      rows={3}
                      {...register(`tabs.${tIdx}.description`)}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <FeatureIcon /> Feature List
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Stack spacing={1}>
                    {(watch(`tabs.${tIdx}.features`) || []).map((_, fIdx) => (
                      <Stack key={fIdx} direction="row" spacing={1}>
                        <TextField
                          fullWidth
                          size="small"
                          {...register(`tabs.${tIdx}.features.${fIdx}`)}
                        />
                        <IconButton
                          color="error"
                          onClick={() => {
                            const current = watch(`tabs.${tIdx}.features`);
                            const updated = [...current];
                            updated.splice(fIdx, 1);
                            setValue(`tabs.${tIdx}.features`, updated);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    ))}
                    <Button
                      startIcon={<AddIcon />}
                      size="small"
                      onClick={() => {
                        const current = watch(`tabs.${tIdx}.features`) || [];
                        setValue(`tabs.${tIdx}.features`, [...current, ""]);
                      }}
                    >
                      Add Feature
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* 3. GALLERY */}
        <Card sx={{ mb: 4, mt: 4 }}>
          <CardContent>
            <Typography
              variant="h6"
              mb={2}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <GalleryIcon color="primary" /> Gallery Images
            </Typography>
            <Grid container spacing={2}>
              {galleryFields.map((item, index) => (
                <Grid item xs={12} md={3} key={item.id}>
                  <Paper variant="outlined" sx={{ p: 1, textAlign: "center" }}>
                    <ImagePreview
                      label={`Photo ${index + 1}`}
                      path={`gallery.${index}.image`}
                      height={120}
                    />
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => removeGallery(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Paper>
                </Grid>
              ))}
              <Grid item xs={12} md={3}>
                <Button
                  fullWidth
                  sx={{ height: 155, border: "2px dashed #ccc" }}
                  onClick={() =>
                    addGallery({
                      image: "",
                      page_slug: "corporate training",
                      position: galleryFields.length + 1,
                    })
                  }
                >
                  + Add Photo
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* 4. COURSES */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography
              variant="h6"
              mb={2}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <CourseIcon color="primary" /> Course Offerings
            </Typography>
            {courseFields.map((item, index) => (
              <Paper key={item.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={2}>
                    <ImagePreview
                      label="Icon Light"
                      path={`courses.${index}.icon`}
                      height={60}
                    />
                    <ImagePreview
                      label="Icon Dark"
                      path={`courses.${index}.icon_dark`}
                      height={60}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Title"
                      fullWidth
                      {...register(`courses.${index}.title`)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Description"
                      fullWidth
                      multiline
                      rows={2}
                      {...register(`courses.${index}.description`)}
                    />
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <IconButton
                      color="error"
                      onClick={() => removeCourse(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() =>
                addCourse({
                  title: "",
                  description: "",
                  icon: "",
                  icon_dark: "",
                  position: courseFields.length + 1,
                })
              }
            >
              Add Course
            </Button>
          </CardContent>
        </Card>

        {/* 5. FAQ */}
        <Card sx={{ mb: 10 }}>
          <CardContent>
            <Typography
              variant="h6"
              mb={2}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <FaqIcon color="primary" /> FAQs
            </Typography>
            {faqFields.map((item, index) => (
              <Box key={item.id} sx={{ mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={5}>
                    <TextField
                      label="Question"
                      fullWidth
                      {...register(`faqs.${index}.question`)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Answer"
                      fullWidth
                      multiline
                      rows={1}
                      {...register(`faqs.${index}.answer`)}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton color="error" onClick={() => removeFaq(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() =>
                addFaq({
                  question: "",
                  answer: "",
                  position: faqFields.length + 1,
                })
              }
            >
              Add FAQ
            </Button>
          </CardContent>
        </Card>
      </form>
    </Container>
  );
}
