"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Divider,
} from "@mui/material";
import { Add, Delete, Save, ExpandMore, HistoryEdu } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function BlogCMS() {
  const [sections, setSections] = useState([
    { title: "", content: "", sort_order: 0 },
  ]);
  const [mainData, setMainData] = useState({ title: "", author: "", date: "" });

  const addSection = () => {
    setSections([
      ...sections,
      { title: "", content: "", sort_order: sections.length },
    ]);
  };

  const updateSection = (index: number, field: string, value: string) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const removeSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    await fetch("/api/blog-details", {
      method: "POST",
      body: JSON.stringify({ ...mainData, sections }),
      headers: { "Content-Type": "application/json" },
    });
    alert("Blog Published!");
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}
        >
          <HistoryEdu color="primary" fontSize="large" /> Blog Detail Editor
        </Typography>

        <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom>
            Main Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Main Article Title"
                fullWidth
                value={mainData.title}
                onChange={(e) =>
                  setMainData({ ...mainData, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Author"
                fullWidth
                value={mainData.author}
                onChange={(e) =>
                  setMainData({ ...mainData, author: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Publish Date"
                fullWidth
                value={mainData.date}
                onChange={(e) =>
                  setMainData({ ...mainData, date: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Table of Contents & Content Blocks
        </Typography>
        {sections.map((sec, index) => (
          <Accordion
            key={index}
            defaultExpanded
            sx={{ mb: 2, borderRadius: "8px !important", overflow: "hidden" }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight="bold">
                Section #{index + 1}: {sec.title || "Untitled"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <TextField
                  label="TOC Title"
                  fullWidth
                  size="small"
                  value={sec.title}
                  onChange={(e) =>
                    updateSection(index, "title", e.target.value)
                  }
                />
                <TextField
                  label="Content (HTML allowed)"
                  multiline
                  rows={4}
                  fullWidth
                  value={sec.content}
                  onChange={(e) =>
                    updateSection(index, "content", e.target.value)
                  }
                />
                <Button
                  color="error"
                  size="small"
                  startIcon={<Delete />}
                  onClick={() => removeSection(index)}
                >
                  Remove Section
                </Button>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}

        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button variant="outlined" startIcon={<Add />} onClick={addSection}>
            Add TOC Section
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<Save />}
            onClick={handleSave}
            size="large"
          >
            Publish Blog
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
