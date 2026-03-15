"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, TextField, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function AdminFreeCyberTraining() {
  const [description, setDescription] = useState<any>({});
  const [features, setFeatures] = useState<any[]>([]);
  const [benefits, setBenefits] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [cta, setCta] = useState<any>({});

  const fetchData = async () => {
    const res = await axios.get("/api/free_cyber_training");
    setDescription(res.data.description[0] || {});
    setFeatures(res.data.features);
    setBenefits(res.data.benefits);
    setFaqs(res.data.faqs);
    setCta(res.data.cta[0] || {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateItem = async (table: string, id: number, values: any) => {
    await axios.put("/api/free_cyber_training", { table, id, values });
    fetchData();
  };

  const deleteItem = async (table: string, id: number) => {
    await axios.delete("/api/free_cyber_training", { data: { table, id } });
    fetchData();
  };

  const handleChangeArray = (
    arr: any[],
    setter: any,
    index: number,
    field: string,
    value: string
  ) => {
    const newArr = [...arr];
    newArr[index][field] = value;
    setter(newArr);
  };

  return (
    <Box p={4}>
      <h1>Free Cyber Training Admin</h1>

      {/* Description */}
      <Box mt={4}>
        <h2>Description</h2>
        <TextField
          label="Heading"
          fullWidth
          value={description.heading || ""}
          onChange={(e) =>
            setDescription({ ...description, heading: e.target.value })
          }
        />
        <TextField
          label="Subheading"
          fullWidth
          multiline
          value={description.subheading || ""}
          onChange={(e) =>
            setDescription({ ...description, subheading: e.target.value })
          }
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          value={description.description || ""}
          onChange={(e) =>
            setDescription({ ...description, description: e.target.value })
          }
        />
        <Button
          variant="contained"
          onClick={() =>
            updateItem(
              "free_cyber_training_description",
              description.id,
              description
            )
          }
        >
          Save Description
        </Button>
      </Box>

      {/* Features */}
      <Box mt={4}>
        <h2>Features / Expectations</h2>
        {features.map((f, i) => (
          <Box key={f.id} display="flex" gap={2} alignItems="center" mb={1}>
            <TextField
              label="Title"
              value={f.title}
              onChange={(e) =>
                handleChangeArray(
                  features,
                  setFeatures,
                  i,
                  "title",
                  e.target.value
                )
              }
            />
            <TextField
              label="Description"
              value={f.description}
              onChange={(e) =>
                handleChangeArray(
                  features,
                  setFeatures,
                  i,
                  "description",
                  e.target.value
                )
              }
            />
            <TextField
              label="Image"
              value={f.image}
              onChange={(e) =>
                handleChangeArray(
                  features,
                  setFeatures,
                  i,
                  "image",
                  e.target.value
                )
              }
            />
            <Button
              onClick={() =>
                updateItem("free_cyber_training_features", f.id, f)
              }
            >
              Update
            </Button>
            <IconButton
              color="error"
              onClick={() => deleteItem("free_cyber_training_features", f.id)}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Benefits */}
      <Box mt={4}>
        <h2>Benefits</h2>
        {benefits.map((b, i) => (
          <Box key={b.id} display="flex" gap={2} alignItems="center" mb={1}>
            <TextField
              label="Text"
              value={b.text}
              onChange={(e) =>
                handleChangeArray(
                  benefits,
                  setBenefits,
                  i,
                  "text",
                  e.target.value
                )
              }
            />
            <TextField
              label="Image"
              value={b.image}
              onChange={(e) =>
                handleChangeArray(
                  benefits,
                  setBenefits,
                  i,
                  "image",
                  e.target.value
                )
              }
            />
            <Button
              onClick={() =>
                updateItem("free_cyber_training_benefits", b.id, b)
              }
            >
              Update
            </Button>
            <IconButton
              color="error"
              onClick={() => deleteItem("free_cyber_training_benefits", b.id)}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* FAQs */}
      <Box mt={4}>
        <h2>FAQs</h2>
        {faqs.map((f, i) => (
          <Box key={f.id} display="flex" gap={2} alignItems="center" mb={1}>
            <TextField
              label="Question"
              fullWidth
              value={f.question}
              onChange={(e) =>
                handleChangeArray(faqs, setFaqs, i, "question", e.target.value)
              }
            />
            <TextField
              label="Answer"
              fullWidth
              value={f.answer}
              onChange={(e) =>
                handleChangeArray(faqs, setFaqs, i, "answer", e.target.value)
              }
            />
            <Button
              onClick={() => updateItem("free_cyber_training_faq", f.id, f)}
            >
              Update
            </Button>
            <IconButton
              color="error"
              onClick={() => deleteItem("free_cyber_training_faq", f.id)}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Box mt={4}>
        <h2>CTA / Final Section</h2>
        <TextField
          label="Heading"
          fullWidth
          value={cta.heading || ""}
          onChange={(e) => setCta({ ...cta, heading: e.target.value })}
        />
        <TextField
          label="Button Text"
          fullWidth
          value={cta.button_text || ""}
          onChange={(e) => setCta({ ...cta, button_text: e.target.value })}
        />
        <TextField
          label="Button Link"
          fullWidth
          value={cta.button_link || ""}
          onChange={(e) => setCta({ ...cta, button_link: e.target.value })}
        />
        <Button
          variant="contained"
          onClick={() => updateItem("free_cyber_training_cta", cta.id, cta)}
        >
          Save CTA
        </Button>
      </Box>
    </Box>
  );
}
