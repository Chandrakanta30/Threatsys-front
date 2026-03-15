"use client";

import React, { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import axiosInstance from "@/app/lib/axios";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Paper,
  IconButton,
  Divider,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Image as ImageIcon,
  Layers as LayersIcon,
  School as SchoolIcon,
  Star as StarIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

interface HomepageData {
  settings: {
    vision_text?: string;
    vision_image?: string;
    learners_count?: number;
    learners_image?: string;
    courses_heading_main?: string;
    courses_heading_highlight?: string;
    courses_subheading?: string;
    choose_heading_main?: string;
    choose_heading_highlight?: string;
    choose_description?: string;
    choose_badge_text?: string;
    foundation_heading_main?: string;
    foundation_heading_highlight?: string;
    foundation_desc1?: string;
    foundation_desc2?: string;
    foundation_years?: number;
    foundation_img1?: string;
    foundation_img2?: string;

    inquiry_text_main?: string;
    inquiry_text_highlight?: string;
    inquiry_button_text?: string;
    top_rated_heading_main?: string;
    top_rated_heading_highlight?: string;
  };
  courses: {
    id?: number;
    title: string;
    description: string;
    icon: string;
    icon_wh: string;
    category?: "trending" | "new" | "career" | "combo";
    badge_text?: string;
    duration?: string;
    training_type?: string;
  }[];
  features: {
    feature_text: string;
  }[];
  clientele: {
    logo_url: string;
    slider_group: number;
  }[];
}

export default function HomepageAdmin() {
  const { register, control, handleSubmit, reset, watch } =
    useForm<HomepageData>({
      defaultValues: {
        settings: {},
        courses: [],
        features: [],
        clientele: [],
      },
    });

  // Dynamic Lists
  const {
    fields: courseFields,
    append: appendCourse,
    remove: removeCourse,
  } = useFieldArray({ control, name: "courses" });
  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({ control, name: "features" });
  const {
    fields: logoFields,
    append: appendLogo,
    remove: removeLogo,
  } = useFieldArray({ control, name: "clientele" });

  // Load Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/homepage");
        reset(res.data);
      } catch (err) {
        console.error("Failed to load homepage data", err);
      }
    };
    fetchData();
  }, [reset]);

  const onSubmit = async (data: any) => {
    try {
      await axiosInstance.put("/homepage", data);
      alert("Homepage updated successfully!");
    } catch (err) {
      alert("Update failed. Check console.");
    }
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh", pb: 10 }}>
      {/* Top Action Bar */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 4,
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="800" color="primary">
              Homepage CMS
            </Typography>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSubmit(onSubmit)}
              sx={{ px: 4, borderRadius: 2 }}
            >
              Publish Changes
            </Button>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="lg">
        {/* 1. VISION SECTION */}
        <Accordion
          defaultExpanded
          sx={{ mb: 2, borderRadius: "8px !important" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ImageIcon color="primary" />
              <Typography fontWeight="bold">
                Vision & Learners Counter
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Vision Title / Mission Text"
                  multiline
                  rows={2}
                  {...register("settings.vision_text")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Total Learners (Number)"
                  type="number"
                  {...register("settings.learners_count")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Mission Icon URL"
                  {...register("settings.vision_image")}
                  placeholder="/images/mission2.png"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Learner Group Image URL"
                  {...register("settings.learners_image")}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* 2. COURSES SECTION */}
        <Accordion sx={{ mb: 2, borderRadius: "8px !important" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1} alignItems="center">
              <SchoolIcon color="primary" />
              <Typography fontWeight="bold">Course Categories</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Heading"
                  {...register("settings.courses_heading_main")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Heading Highlight (Blue)"
                  {...register("settings.courses_heading_highlight")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sub-description"
                  multiline
                  rows={2}
                  {...register("settings.courses_subheading")}
                />
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }}>Manage Course Cards</Divider>
            <Stack spacing={2}>
              {courseFields.map((field, index) => (
                <Paper
                  key={field.id}
                  variant="outlined"
                  sx={{ p: 2, bgcolor: "#fafafa" }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Course Title"
                        {...register(`courses.${index}.title`)}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Description"
                        {...register(`courses.${index}.description`)}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Icon (Color)"
                        {...register(`courses.${index}.icon`)}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Icon (White)"
                        {...register(`courses.${index}.icon_wh`)}
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
                  appendCourse({
                    title: "",
                    description: "",
                    icon: "",
                    icon_wh: "",
                  })
                }
              >
                Add New Course
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1}>
              <SchoolIcon color="primary" />
              <Typography fontWeight="bold">
                2. Course Categories Header
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Heading (Plain)"
                  {...register("settings.courses_heading_main")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Heading (Blue Highlight)"
                  {...register("settings.courses_heading_highlight")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sub-description"
                  multiline
                  rows={2}
                  {...register("settings.courses_subheading")}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1}>
              {/* <SupportIcon color="primary" /> */}
              <Typography fontWeight="bold">
                3. Inquiry & Certification
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Text Before Highlight"
                  {...register("settings.inquiry_text_main")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Highlighted Text (Certificate)"
                  {...register("settings.inquiry_text_highlight")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Button Text"
                  {...register("settings.inquiry_button_text")}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1}>
              <StarIcon color="primary" />
              <Typography fontWeight="bold">
                4. Top Rated Course Cards (Tabs)
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Section Heading"
                  {...register("settings.top_rated_heading_main")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Heading Highlight"
                  {...register("settings.top_rated_heading_highlight")}
                />
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }}>Manage Dynamic Cards</Divider>
            <Stack spacing={2}>
              {courseFields.map((field, index) => (
                <Paper key={field.id} variant="outlined" sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Course Name"
                        {...register(`courses.${index}.title`)}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        select
                        fullWidth
                        size="small"
                        label="Tab"
                        defaultValue="trending"
                        {...register(`courses.${index}.category`)}
                      >
                        <MenuItem value="trending">Trending</MenuItem>
                        <MenuItem value="new">New Courses</MenuItem>
                        <MenuItem value="career">Career Oriented</MenuItem>
                        <MenuItem value="combo">Combo Courses</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Badge (CISSP)"
                        {...register(`courses.${index}.badge_text`)}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Duration"
                        {...register(`courses.${index}.duration`)}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Training Type"
                        {...register(`courses.${index}.training_type`)}
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
                  appendCourse({
                    title: "",
                    description: "",
                    icon: "",
                    icon_wh: "",
                  })
                }
              >
                Add Course Card
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* 3. WHY CHOOSE US */}
        <Accordion sx={{ mb: 2, borderRadius: "8px !important" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1} alignItems="center">
              <StarIcon color="primary" />
              <Typography fontWeight="bold">Why Choose Us Section</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Main Heading"
                  {...register("settings.choose_heading_main")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Heading Highlight"
                  {...register("settings.choose_heading_highlight")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Experience Badge (e.g. 27K+)"
                  {...register("settings.choose_badge_text")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Description"
                  {...register("settings.choose_description")}
                />
              </Grid>
            </Grid>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Feature Bullet Points:
            </Typography>
            <Grid container spacing={1}>
              {featureFields.map((field, index) => (
                <Grid item xs={12} md={4} key={field.id}>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      fullWidth
                      size="small"
                      {...register(`features.${index}.feature_text`)}
                    />
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeFeature(index)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Grid>
              ))}
            </Grid>
            <Button
              startIcon={<AddIcon />}
              onClick={() => appendFeature({ feature_text: "" })}
              sx={{ mt: 1 }}
            >
              Add Feature
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* 4. CLIENTELE LOGOS */}
        <Accordion sx={{ mb: 2, borderRadius: "8px !important" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1} alignItems="center">
              <BusinessIcon color="primary" />
              <Typography fontWeight="bold">Clientele & Brand Logos</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: 2,
              }}
            >
              {logoFields.map((field, index) => (
                <Paper
                  key={field.id}
                  variant="outlined"
                  sx={{ p: 1, textAlign: "center" }}
                >
                  <Avatar
                    variant="square"
                    src={watch(`clientele.${index}.logo_url`)}
                    sx={{
                      width: "100%",
                      height: 60,
                      mb: 1,
                      objectFit: "contain",
                      bgcolor: "#f9f9f9",
                    }}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Logo URL"
                    {...register(`clientele.${index}.logo_url`)}
                  />
                  <Stack direction="row" justifyContent="space-between" mt={1}>
                    <TextField
                      select
                      SelectProps={{ native: true }}
                      size="small"
                      {...register(`clientele.${index}.slider_group`)}
                    >
                      <option value={1}>Slider 1</option>
                      <option value={2}>Slider 2</option>
                    </TextField>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeLogo(index)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Paper>
              ))}
              <Button
                variant="outlined"
                sx={{ height: 120, borderStyle: "dashed" }}
                onClick={() => appendLogo({ logo_url: "", slider_group: 1 })}
              >
                <AddIcon />
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* 5. FOUNDATION */}
        <Accordion sx={{ mb: 2, borderRadius: "8px !important" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1} alignItems="center">
              <LayersIcon color="primary" />
              <Typography fontWeight="bold">Threatsys Foundation</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Main Heading"
                  {...register("settings.foundation_heading_main")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Heading Highlight"
                  {...register("settings.foundation_heading_highlight")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Description Para 1"
                  {...register("settings.foundation_desc1")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Description Para 2"
                  {...register("settings.foundation_desc2")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Years Experience"
                  {...register("settings.foundation_years")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Image 1 URL"
                  {...register("settings.foundation_img1")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Image 2 URL"
                  {...register("settings.foundation_img2")}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}
