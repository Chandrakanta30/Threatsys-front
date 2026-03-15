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
} from "@mui/material";

import { Delete, Add } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function OneOnOneAdmin() {
  const [header, setHeader] = useState<any>({});
  const [benefits, setBenefits] = useState<any[]>([]);
  const [progress, setProgress] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);

  const loadData = async () => {
    const h = await axios.get("/api/one-on-one/header");
    const b = await axios.get("/api/one-on-one/benefits");
    const p = await axios.get("/api/one-on-one/progress");
    const f = await axios.get("/api/one-on-one/faqs");

    setHeader(h.data || {});
    setBenefits(b.data);
    setProgress(p.data);
    setFaqs(f.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // =====================
  // Header Save
  // =====================

  const saveHeader = async () => {
    if (header.id) {
      await axios.put("/api/one-on-one/header", header);
    } else {
      await axios.post("/api/one-on-one/header", header);
    }

    loadData();
  };

  // =====================
  // Benefits
  // =====================

  const addBenefit = () => {
    setBenefits([...benefits, { img: "", text: "" }]);
  };

  const removeBenefit = async (row: any, index: number) => {
    if (row.id) {
      await axios.delete(`/api/one-on-one/benefits?id=${row.id}`);
    }

    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const saveBenefits = async () => {
    for (const b of benefits) {
      if (b.id) {
        await axios.put("/api/one-on-one/benefits", b);
      } else {
        await axios.post("/api/one-on-one/benefits", b);
      }
    }

    loadData();
  };

  // =====================
  // Progress
  // =====================

  const addProgress = () => {
    setProgress([...progress, { img: "", label: "" }]);
  };

  const removeProgress = async (row: any, index: number) => {
    if (row.id) {
      await axios.delete(`/api/one-on-one/progress?id=${row.id}`);
    }

    setProgress(progress.filter((_, i) => i !== index));
  };

  const saveProgress = async () => {
    for (const p of progress) {
      if (p.id) {
        await axios.put("/api/one-on-one/progress", p);
      } else {
        await axios.post("/api/one-on-one/progress", p);
      }
    }

    loadData();
  };

  // =====================
  // FAQ
  // =====================

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = async (row: any, index: number) => {
    if (row.id) {
      await axios.delete(`/api/one-on-one/faqs?id=${row.id}`);
    }

    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const saveFaqs = async () => {
    for (const f of faqs) {
      if (f.id) {
        await axios.put("/api/one-on-one/faqs", f);
      } else {
        await axios.post("/api/one-on-one/faqs", f);
      }
    }

    loadData();
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        1-on-1 Training Page CMS
      </Typography>

      <Grid container spacing={4}>
        {/* HEADER */}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Why Choose Section</Typography>

              <Divider sx={{ my: 2 }} />

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
                    label="Highlight Text"
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

              <Button variant="contained" sx={{ mt: 2 }} onClick={saveHeader}>
                Save Header
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* BENEFITS */}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Benefits Slider</Typography>

              <Divider sx={{ my: 2 }} />

              {benefits.map((item, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Image URL"
                      fullWidth
                      value={item.img}
                      onChange={(e) => {
                        const updated = [...benefits];
                        updated[index].img = e.target.value;
                        setBenefits(updated);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={7}>
                    <TextField
                      label="Text"
                      fullWidth
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
                      onClick={() => removeBenefit(item, index)}
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}

              <Button startIcon={<Add />} onClick={addBenefit}>
                Add Benefit
              </Button>

              <Button variant="contained" sx={{ ml: 2 }} onClick={saveBenefits}>
                Save Benefits
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* PROGRESS */}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Progress Icons</Typography>

              <Divider sx={{ my: 2 }} />

              {progress.map((item, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Icon Image"
                      fullWidth
                      value={item.img}
                      onChange={(e) => {
                        const updated = [...progress];
                        updated[index].img = e.target.value;
                        setProgress(updated);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={7}>
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

                  <Grid item xs={12} md={1}>
                    <IconButton
                      color="error"
                      onClick={() => removeProgress(item, index)}
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}

              <Button startIcon={<Add />} onClick={addProgress}>
                Add Item
              </Button>

              <Button variant="contained" sx={{ ml: 2 }} onClick={saveProgress}>
                Save Progress
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* FAQ */}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">FAQs</Typography>

              <Divider sx={{ my: 2 }} />

              {faqs.map((item, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                  <Grid item xs={12} md={4}>
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

                  <Grid item xs={12} md={7}>
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

                  <Grid item xs={12} md={1}>
                    <IconButton
                      color="error"
                      onClick={() => removeFaq(item, index)}
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}

              <Button startIcon={<Add />} onClick={addFaq}>
                Add FAQ
              </Button>

              <Button variant="contained" sx={{ ml: 2 }} onClick={saveFaqs}>
                Save FAQs
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
