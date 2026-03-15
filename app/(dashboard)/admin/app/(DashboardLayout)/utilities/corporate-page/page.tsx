"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";

import {
  Container,
  // Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import { Delete, Add, CloudUpload } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

import {
  Box,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Save as SaveIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Tab as TabIcon,
  CheckCircleOutline as FeatureIcon,
} from "@mui/icons-material";

interface TabItem {
  id: number;
  tab_type: string; // educate, excel, empower
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[]; // We will handle this as a JSON array
}

export default function CorporateAdminPage() {
  const [tabs, setTabs] = useState<TabItem[]>([]);

  const { register, control, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      logos: [],
      stats: [],
      gallery: [],
      courses: [],
      faqs: [],
      tabs: [],
    },
  });

  /* LOGOS */

  const {
    fields: logos,
    append: addLogo,
    remove: removeLogo,
  } = useFieldArray({ control, name: "logos" });

  /* STATS */

  const {
    fields: stats,
    append: addStat,
    remove: removeStat,
  } = useFieldArray({ control, name: "stats" });

  /* GALLERY */

  const {
    fields: gallery,
    append: addGallery,
    remove: removeGallery,
  } = useFieldArray({ control, name: "gallery" });

  /* COURSES */

  const {
    fields: courses,
    append: addCourse,
    remove: removeCourse,
  } = useFieldArray({ control, name: "courses" });

  /* FAQ */

  const {
    fields: faqs,
    append: addFaq,
    remove: removeFaq,
  } = useFieldArray({ control, name: "faqs" });

  const { fields: tabFields, replace: replaceTabs } = useFieldArray({
    control,
    name: "tabs",
  });

  /* LOAD DATA */

  const loadData = async () => {
    const res = await axios.get("/api/corporate-page");
    // setTabs(res.data.tabs);
    reset(res.data);
    if (res.data.tabs) {
      replaceTabs(res.data.tabs);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  /* SAVE */

  const onSubmit = async (data: any) => {
    await axios.post("/api/corporate-page", data);
    alert("Page Updated");
  };

  const handleUpdateTab = (index: number, field: keyof TabItem, value: any) => {
    const updatedTabs = [...tabs];
    updatedTabs[index] = { ...updatedTabs[index], [field]: value };
    setTabs(updatedTabs);
  };

  const handleFeatureChange = (
    tabIndex: number,
    featureIndex: number,
    value: string
  ) => {
    const updatedTabs = [...tabs];
    updatedTabs[tabIndex].features[featureIndex] = value;
    setTabs(updatedTabs);
  };

  const addFeature = (tabIndex: number) => {
    const updatedTabs = [...tabs];
    updatedTabs[tabIndex].features.push("");
    setTabs(updatedTabs);
  };

  const removeFeature = (tabIndex: number, featureIndex: number) => {
    const updatedTabs = [...tabs];
    updatedTabs[tabIndex].features.splice(featureIndex, 1);
    setTabs(updatedTabs);
  };

  const uploadImage = async (file: File, field: string) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "corporate");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    return data.url as string;

    // setIntro({ ...intro, [field]: data.url });
  };
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Corporate Page CMS
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* CLIENT LOGOS */}

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Client Logos
            </Typography>

            <Grid container spacing={2}>
              {logos.map((item, index) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <Card sx={{ p: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Logo Image URL"
                          {...register(`logos.${index}.image`)}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          select
                          SelectProps={{ native: true }}
                          label="Slider"
                          fullWidth
                          {...register(`logos.${index}.slider`)}
                        >
                          <option value="1">Slider 1</option>
                          <option value="2">Slider 2</option>
                        </TextField>
                      </Grid>

                      <Grid item xs={4}>
                        <TextField
                          label="Position"
                          type="number"
                          fullWidth
                          {...register(`logos.${index}.position`)}
                        />
                      </Grid>

                      <Grid item xs={2}>
                        <IconButton
                          color="error"
                          onClick={() => removeLogo(index)}
                        >
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              startIcon={<Add />}
              sx={{ mt: 2 }}
              onClick={() => addLogo({ image: "", slider: 1, position: 1 })}
            >
              Add Logo
            </Button>
          </CardContent>
        </Card>

        {/* GROWTH STATS */}

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Growth Stats
            </Typography>

            <Grid container spacing={2}>
              {stats.map((item, index) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <Card sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <TextField
                          label="Icon"
                          fullWidth
                          {...register(`stats.${index}.icon`)}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextField
                          label="Number"
                          fullWidth
                          {...register(`stats.${index}.number`)}
                        />
                      </Grid>

                      <Grid item xs={3}>
                        <TextField
                          label="Text"
                          fullWidth
                          {...register(`stats.${index}.text`)}
                        />
                      </Grid>

                      <Grid item xs={1}>
                        <IconButton
                          color="error"
                          onClick={() => removeStat(index)}
                        >
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              startIcon={<Add />}
              sx={{ mt: 2 }}
              onClick={() =>
                addStat({
                  icon: "",
                  number: "",
                  text: "",
                })
              }
            >
              Add Stat
            </Button>
          </CardContent>
        </Card>

        <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh", pb: 10 }}>
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
                <Typography variant="h5" fontWeight="800">
                  Course Tabs (Educate/Excel/Empower)
                </Typography>
              </Stack>
            </Container>
          </Paper>

          <Container maxWidth="lg">
            {tabFields.map((tab, tIdx) => (
              <Accordion key={tab.id} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{watch(`tabs.${tIdx}.title`)} Section</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={2}>
                        <TextField
                          label="Tab Title"
                          fullWidth
                          {...register(`tabs.${tIdx}.title`)}
                        />
                        <TextField
                          label="Icon URL"
                          fullWidth
                          {...register(`tabs.${tIdx}.icon`)}
                        />
                        <Box>
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            gutterBottom
                          >
                            Main Image
                          </Typography>
                          <Paper
                            variant="outlined"
                            sx={{
                              p: 2,
                              textAlign: "center",
                              bgcolor: "#fafafa",
                              borderStyle: "dashed",
                            }}
                          >
                            {/* Live Preview of the uploaded image */}
                            {watch(`tabs.${tIdx}.image`) && (
                              <Box mb={2}>
                                <img
                                  src={watch(`tabs.${tIdx}.image`)}
                                  alt="Preview"
                                  style={{
                                    maxHeight: "150px",
                                    borderRadius: "4px",
                                  }}
                                />
                              </Box>
                            )}

                            <Button
                              variant="outlined"
                              component="label"
                              startIcon={<CloudUpload />}
                              fullWidth
                            >
                              {watch(`tabs.${tIdx}.image`)
                                ? "Change Image"
                                : "Upload Image"}
                              <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    // 1. Call your helper function
                                    const filePath = await uploadImage(
                                      file,
                                      "image" + tIdx
                                    );
                                    // 2. Update the hidden form field with the returned path
                                    setValue(`tabs.${tIdx}.image`, filePath, {
                                      shouldValidate: true,
                                    });
                                  }
                                }}
                              />
                            </Button>

                            {/* Hidden field to keep the path registered in the form */}
                            <input
                              type="hidden"
                              {...register(`tabs.${tIdx}.image`)}
                            />
                          </Paper>
                        </Box>
                        <TextField
                          label="Description"
                          fullWidth
                          multiline
                          rows={4}
                          {...register(`tabs.${tIdx}.description`)}
                        />
                      </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2">
                        <FeatureIcon /> Features
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Stack spacing={1}>
                        {/* Logic for features within the tab */}
                        {watch(`tabs.${tIdx}.features`)?.map((_, fIdx) => (
                          <Stack key={fIdx} direction="row" spacing={1}>
                            <TextField
                              fullWidth
                              size="small"
                              {...register(`tabs.${tIdx}.features.${fIdx}`)}
                            />
                            <IconButton
                              color="error"
                              onClick={() => {
                                const currentFeatures = watch(
                                  `tabs.${tIdx}.features`
                                );
                                currentFeatures.splice(fIdx, 1);
                                handleUpdateTab(
                                  tIdx,
                                  "features",
                                  currentFeatures
                                ); // Update helper
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Stack>
                        ))}
                        <Button
                          onClick={() => {
                            const currentFeatures =
                              watch(`tabs.${tIdx}.features`) || [];
                            handleUpdateTab(tIdx, "features", [
                              ...currentFeatures,
                              "",
                            ]);
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
          </Container>
        </Box>

        {/* GALLERY */}

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Gallery
            </Typography>

            <Grid container spacing={2}>
              {gallery.map((item, index) => (
                <Grid item xs={12} md={4} key={item.id}>
                  <Card sx={{ p: 2 }}>
                    <TextField
                      label="Image URL"
                      fullWidth
                      {...register(`gallery.${index}.image`)}
                    />

                    <IconButton
                      color="error"
                      sx={{ mt: 1 }}
                      onClick={() => removeGallery(index)}
                    >
                      <Delete />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              startIcon={<Add />}
              sx={{ mt: 2 }}
              onClick={() => addGallery({ image: "" })}
            >
              Add Image
            </Button>
          </CardContent>
        </Card>

        {/* COURSES */}

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Courses
            </Typography>

            {courses.map((item, index) => (
              <Card key={item.id} sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Icon"
                      fullWidth
                      {...register(`courses.${index}.icon`)}
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Title"
                      fullWidth
                      {...register(`courses.${index}.title`)}
                    />
                  </Grid>

                  <Grid item xs={12} md={5}>
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
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </Card>
            ))}

            <Button
              startIcon={<Add />}
              onClick={() =>
                addCourse({
                  icon: "",
                  title: "",
                  description: "",
                })
              }
            >
              Add Course
            </Button>
          </CardContent>
        </Card>

        {/* FAQ */}

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              FAQ
            </Typography>

            {faqs.map((item, index) => (
              <Card key={item.id} sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <TextField
                      label="Question"
                      fullWidth
                      {...register(`faqs.${index}.question`)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Answer"
                      fullWidth
                      multiline
                      rows={2}
                      {...register(`faqs.${index}.answer`)}
                    />
                  </Grid>

                  <Grid item xs={12} md={1}>
                    <IconButton color="error" onClick={() => removeFaq(index)}>
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </Card>
            ))}

            <Button
              startIcon={<Add />}
              onClick={() =>
                addFaq({
                  question: "",
                  answer: "",
                })
              }
            >
              Add FAQ
            </Button>
          </CardContent>
        </Card>

        <Divider sx={{ mb: 3 }} />

        <Button variant="contained" size="large" type="submit">
          Save Page
        </Button>
      </form>
    </Container>
  );
}
