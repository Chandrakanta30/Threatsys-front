// admin/CareerPageAdmin.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import axios from "axios";
import Grid from "@mui/material/GridLegacy";

interface Feature {
  id?: number;
  title: string;
  icon: string;
}

interface Batch {
  id?: number;
  course: string;
  date: string;
  time: string;
  mode: string;
  type: string;
  status: string;
}

interface FAQ {
  id?: number;
  question: string;
  answer: string;
}

interface WhyChoose {
  id?: number;
  text: string;
}

interface Intro {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const CareerPageAdmin = () => {
  const [intro, setIntro] = useState<Intro>({
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    image: "",
  });

  const [features, setFeatures] = useState<Feature[]>([]);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [whyChoose, setWhyChoose] = useState<WhyChoose[]>([]);

  // Fetch initial data
  useEffect(() => {
    axios.get("/api/training-batches").then((res) => {
      const data = res.data;
      setIntro(data.intro || intro);
      setFeatures(data.features || []);
      setBatches(data.batches || []);
      setFaqs(data.faqs || []);
      setWhyChoose(data.whyChoose || []);
    });
  }, []);

  // Handlers
  const handleIntroChange = (field: keyof Intro, value: string) => {
    setIntro({ ...intro, [field]: value });
  };

  const handleFeatureChange = (
    index: number,
    field: keyof Feature,
    value: string
  ) => {
    const newFeatures = [...features];
    newFeatures[index] = { ...newFeatures[index], [field]: value } as Feature; // ✅ type assertion
    setFeatures(newFeatures);
  };

  const addFeature = () => setFeatures([...features, { title: "", icon: "" }]);
  const removeFeature = (index: number) => {
    const newFeatures = [...features];
    newFeatures.splice(index, 1);
    setFeatures(newFeatures);
  };

  const handleBatchChange = (
    index: number,
    field: keyof Batch,
    value: string
  ) => {
    const newBatches = [...batches];
    newBatches[index] = { ...newBatches[index], [field]: value } as Batch;
    setBatches(newBatches);
  };

  const addBatch = () =>
    setBatches([
      ...batches,
      { course: "", date: "", time: "", mode: "", type: "", status: "" },
    ]);
  const removeBatch = (index: number) => {
    const newBatches = [...batches];
    newBatches.splice(index, 1);
    setBatches(newBatches);
  };

  const handleFaqChange = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index] = { ...newFaqs[index], [field]: value } as FAQ;
    setFaqs(newFaqs);
  };
  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFaq = (index: number) => {
    const newFaqs = [...faqs];
    newFaqs.splice(index, 1);
    setFaqs(newFaqs);
  };

  const handleWhyChooseChange = (index: number, value: string) => {
    const newData = [...whyChoose];
    newData[index] = { ...newData[index], text: value } as WhyChoose;
    setWhyChoose(newData);
  };
  const addWhyChoose = () => setWhyChoose([...whyChoose, { text: "" }]);
  const removeWhyChoose = (index: number) => {
    const newData = [...whyChoose];
    newData.splice(index, 1);
    setWhyChoose(newData);
  };

  const handleSave = async () => {
    try {
      await axios.post("/api/training-batches", {
        intro,
        features,
        batches,
        faqs,
        whyChoose,
      });
      alert("Saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to save");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Career Page Admin
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Intro Section */}
      <Typography variant="h6">Intro Section</Typography>
      <TextField
        fullWidth
        label="Title"
        value={intro.title}
        onChange={(e) => handleIntroChange("title", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Subtitle"
        value={intro.subtitle}
        onChange={(e) => handleIntroChange("subtitle", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Description"
        multiline
        minRows={3}
        value={intro.description}
        onChange={(e) => handleIntroChange("description", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Button Text"
        value={intro.buttonText}
        onChange={(e) => handleIntroChange("buttonText", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Button Link"
        value={intro.buttonLink}
        onChange={(e) => handleIntroChange("buttonLink", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Image URL"
        value={intro.image}
        onChange={(e) => handleIntroChange("image", e.target.value)}
        sx={{ mb: 3 }}
      />

      <Divider sx={{ mb: 3 }} />

      {/* Features Section */}
      <Typography variant="h6">Features</Typography>
      {features?.map((f, i) => (
        <Box key={i} display="flex" gap={2} alignItems="center" mb={1}>
          <TextField
            label="Title"
            value={f.title}
            onChange={(e) => handleFeatureChange(i, "title", e.target.value)}
          />
          <TextField
            label="Icon URL"
            value={f.icon}
            onChange={(e) => handleFeatureChange(i, "icon", e.target.value)}
          />
          <IconButton color="error" onClick={() => removeFeature(i)}>
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button startIcon={<Add />} onClick={addFeature} sx={{ mb: 3 }}>
        Add Feature
      </Button>

      <Divider sx={{ mb: 3 }} />

      {/* Batches Section */}
      <Typography variant="h6">Upcoming Batches</Typography>
      {batches?.map((b, i) => (
        <Box key={i} display="flex" gap={2} flexWrap="wrap" mb={1}>
          <TextField
            label="Course"
            value={b.course}
            onChange={(e) => handleBatchChange(i, "course", e.target.value)}
          />
          <TextField
            label="Date"
            value={b.date}
            onChange={(e) => handleBatchChange(i, "date", e.target.value)}
          />
          <TextField
            label="Time"
            value={b.time}
            onChange={(e) => handleBatchChange(i, "time", e.target.value)}
          />
          <TextField
            label="Mode"
            value={b.mode}
            onChange={(e) => handleBatchChange(i, "mode", e.target.value)}
          />
          <TextField
            label="Type"
            value={b.type}
            onChange={(e) => handleBatchChange(i, "type", e.target.value)}
          />
          <TextField
            label="Status"
            value={b.status}
            onChange={(e) => handleBatchChange(i, "status", e.target.value)}
          />
          <IconButton color="error" onClick={() => removeBatch(i)}>
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button startIcon={<Add />} onClick={addBatch} sx={{ mb: 3 }}>
        Add Batch
      </Button>

      <Divider sx={{ mb: 3 }} />

      {/* Why Choose Us Section */}
      <Typography variant="h6">Why Choose Us</Typography>
      {Array.isArray(whyChoose) &&
        whyChoose?.map((item, i) => (
          <Box key={i} display="flex" gap={2} alignItems="center" mb={1}>
            <TextField
              label="Text"
              fullWidth
              value={item.text}
              onChange={(e) => handleWhyChooseChange(i, e.target.value)}
            />
            <IconButton color="error" onClick={() => removeWhyChoose(i)}>
              <Delete />
            </IconButton>
          </Box>
        ))}
      <Button startIcon={<Add />} onClick={addWhyChoose} sx={{ mb: 3 }}>
        Add Why Choose Us
      </Button>

      <Divider sx={{ mb: 3 }} />

      {/* FAQs Section */}
      <Typography variant="h6">FAQs</Typography>
      {faqs?.map((faq, i) => (
        <Box key={i} display="flex" gap={2} flexWrap="wrap" mb={1}>
          <TextField
            label="Question"
            value={faq.question}
            onChange={(e) => handleFaqChange(i, "question", e.target.value)}
            sx={{ flex: 1 }}
          />
          <TextField
            label="Answer"
            value={faq.answer}
            onChange={(e) => handleFaqChange(i, "answer", e.target.value)}
            sx={{ flex: 2 }}
          />
          <IconButton color="error" onClick={() => removeFaq(i)}>
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button startIcon={<Add />} onClick={addFaq} sx={{ mb: 3 }}>
        Add FAQ
      </Button>

      <Divider sx={{ mb: 3 }} />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save All
      </Button>
    </Box>
  );
};

export default CareerPageAdmin;
