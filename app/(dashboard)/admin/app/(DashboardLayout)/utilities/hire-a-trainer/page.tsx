"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  // Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  MenuItem,
} from "@mui/material";

import { Delete, Add } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function HireTrainerAdmin() {
  const [comparison, setComparison] = useState<any[]>([]);
  const [steps, setSteps] = useState<any[]>([]);

  // Load data
  const loadData = async () => {
    const comp = await axios.get("/api/hire-trainer/comparison");
    const step = await axios.get("/api/hire-trainer/steps");

    setComparison(comp.data);
    setSteps(step.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // ============================
  // Comparison Section
  // ============================

  const addComparison = () => {
    setComparison([
      ...comparison,
      { side: "left", text: "", position: comparison.length + 1 },
    ]);
  };

  const removeComparison = async (row: any, index: number) => {
    if (row.id) {
      await axios.delete(`/api/hire-trainer/comparison?id=${row.id}`);
    }

    setComparison(comparison.filter((_, i) => i !== index));
  };

  const saveComparison = async () => {
    for (const row of comparison) {
      if (row.id) {
        await axios.put("/api/hire-trainer/comparison", row);
      } else {
        await axios.post("/api/hire-trainer/comparison", row);
      }
    }

    loadData();
  };

  // ============================
  // Steps Section
  // ============================

  const addStep = () => {
    setSteps([
      ...steps,
      { title: "", description: "", position: steps.length + 1 },
    ]);
  };

  const removeStep = async (step: any, index: number) => {
    if (step.id) {
      await axios.delete(`/api/hire-trainer/steps?id=${step.id}`);
    }

    setSteps(steps.filter((_, i) => i !== index));
  };

  const saveSteps = async () => {
    for (const step of steps) {
      if (step.id) {
        await axios.put("/api/hire-trainer/steps", step);
      } else {
        await axios.post("/api/hire-trainer/steps", step);
      }
    }

    loadData();
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Hire-a-Trainer Page CMS
      </Typography>

      <Grid container spacing={4}>
        {/* ===================== */}
        {/* Comparison Section */}
        {/* ===================== */}

        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Comparison Section
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={2}>
                {comparison.map((row, index) => (
                  <Grid container spacing={2} key={index}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        select
                        label="Side"
                        fullWidth
                        value={row.side}
                        onChange={(e) => {
                          const updated = [...comparison];
                          updated[index].side = e.target.value;
                          setComparison(updated);
                        }}
                      >
                        <MenuItem value="left">Left</MenuItem>
                        <MenuItem value="right">Right</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} md={8}>
                      <TextField
                        fullWidth
                        label="Text"
                        value={row.text}
                        onChange={(e) => {
                          const updated = [...comparison];
                          updated[index].text = e.target.value;
                          setComparison(updated);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={1}>
                      <IconButton
                        color="error"
                        onClick={() => removeComparison(row, index)}
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </Grid>

              <Box mt={3}>
                <Button startIcon={<Add />} onClick={addComparison}>
                  Add Option
                </Button>

                <Button
                  variant="contained"
                  sx={{ ml: 2 }}
                  onClick={saveComparison}
                >
                  Save Comparison
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* ===================== */}
        {/* Steps Section */}
        {/* ===================== */}

        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                How It Works Slider
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={2}>
                {steps.map((step, index) => (
                  <Grid container spacing={2} key={index}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Title"
                        fullWidth
                        value={step.title}
                        onChange={(e) => {
                          const updated = [...steps];
                          updated[index].title = e.target.value;
                          setSteps(updated);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={7}>
                      <TextField
                        label="Description"
                        multiline
                        rows={2}
                        fullWidth
                        value={step.description}
                        onChange={(e) => {
                          const updated = [...steps];
                          updated[index].description = e.target.value;
                          setSteps(updated);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={1}>
                      <IconButton
                        color="error"
                        onClick={() => removeStep(step, index)}
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </Grid>

              <Box mt={3}>
                <Button startIcon={<Add />} onClick={addStep}>
                  Add Step
                </Button>

                <Button variant="contained" sx={{ ml: 2 }} onClick={saveSteps}>
                  Save Steps
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
