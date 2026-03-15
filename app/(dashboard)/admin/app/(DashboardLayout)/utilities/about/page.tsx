"use client";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import {
  // Grid,
  Paper,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
// import Grid from "@mui/material/Grid";
import Grid from "@mui/material/GridLegacy";

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
  banner_breadcrumbs: string[];

  intro_heading: string;
  intro_subheading: string;
  intro_paragraph1: string;
  intro_paragraph2: string;
  intro_experience_years: number;
  intro_images: string[];

  stats: StatItem[];

  mission_items: MissionItem[];

  faqs: FaqItem[];

  client_logos: ClientLogo[];
}
type ClientLogo = {
  logo: string;
};

export default function AdminAboutUs() {
  const { register, control, handleSubmit, reset } = useForm<AboutUsForm>();

  const [formData, setFormData] = useState<AboutUsForm>({
    banner_heading: "",
    banner_breadcrumbs: ["Home", "About Us", "Threatsys Academy"],
    intro_heading: "",
    intro_subheading: "",
    intro_paragraph1: "",
    intro_paragraph2: "",
    intro_experience_years: 0,
    intro_images: Array(2).fill(""),
    stats: Array(4).fill({ number: "", label: "", icon: "" }),
    mission_items: Array(3).fill({ title: "", description: "", icon: "" }),
    faqs: Array(2).fill({ question: "", answer: "" }),
    client_logos: Array(7).fill(""),
  });

  const statsArray = useFieldArray({ control, name: "stats" });
  const missionArray = useFieldArray({ control, name: "mission_items" });
  const faqArray = useFieldArray({ control, name: "faqs" });
  const clientLogosArray = useFieldArray({ control, name: "client_logos" });

  useEffect(() => {
    // Fetch initial data
    axios.get("/api/about-us").then((res) => {
      reset(res.data);
    });
  }, [reset]);

  const onSubmit: SubmitHandler<AboutUsForm> = async (data) => {
    await axios.put("/api/about-us", data);
    alert("About Us page updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {/* Banner Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Banner Section</Typography>
            <TextField
              {...register("banner_heading")}
              label="Banner Heading"
              fullWidth
              sx={{ my: 1 }}
            />
          </Paper>
        </Grid>

        {/* Intro Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Introduction Section</Typography>
            <TextField
              {...register("intro_heading")}
              label="Heading"
              fullWidth
              sx={{ my: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register("intro_subheading")}
              label="Subheading"
              fullWidth
              sx={{ my: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register("intro_paragraph1")}
              label="Paragraph 1"
              multiline
              rows={3}
              fullWidth
              sx={{ my: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register("intro_paragraph2")}
              label="Paragraph 2"
              multiline
              rows={3}
              fullWidth
              sx={{ my: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              {...register("intro_experience_years")}
              label="Years of Experience"
              type="number"
              fullWidth
              sx={{ my: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            {formData.intro_images.map((img, i) => (
              <TextField
                key={i}
                {...register(`intro_images.${i}`)}
                label={`Image URL ${i + 1}`}
                fullWidth
                sx={{ my: 1 }}
                InputLabelProps={{ shrink: true }}
              />
            ))}
          </Paper>
        </Grid>

        {/* Stats Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Statistics Section</Typography>
            {statsArray.fields.map((field, index) => (
              <Grid container spacing={1} key={field.id} alignItems="center">
                <Grid item xs={3}>
                  <TextField
                    {...register(`stats.${index}.number`)}
                    label="Number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    {...register(`stats.${index}.label`)}
                    label="Label"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    {...register(`stats.${index}.icon`)}
                    label="Icon URL"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="error"
                    onClick={() => statsArray.remove(index)}
                  >
                    <RemoveCircle />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <IconButton
              color="primary"
              onClick={() =>
                statsArray.append({ number: "", label: "", icon: "" })
              }
            >
              <AddCircle />
            </IconButton>
          </Paper>
        </Grid>

        {/* Mission Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Vision / Mission / Values</Typography>
            {missionArray.fields.map((field, index) => (
              <Grid container spacing={1} key={field.id} alignItems="center">
                <Grid item xs={4}>
                  <TextField
                    {...register(`mission_items.${index}.title`)}
                    label="Title"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    {...register(`mission_items.${index}.description`)}
                    label="Description"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    {...register(`mission_items.${index}.icon`)}
                    label="Icon URL"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="error"
                    onClick={() => missionArray.remove(index)}
                  >
                    <RemoveCircle />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <IconButton
              color="primary"
              onClick={() =>
                missionArray.append({ title: "", description: "", icon: "" })
              }
            >
              <AddCircle />
            </IconButton>
          </Paper>
        </Grid>

        {/* FAQ Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">FAQ Section</Typography>
            {faqArray.fields.map((field, index) => (
              <Grid container spacing={1} key={field.id} alignItems="center">
                <Grid item xs={5}>
                  <TextField
                    {...register(`faqs.${index}.question`)}
                    label="Question"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    {...register(`faqs.${index}.answer`)}
                    label="Answer"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="error"
                    onClick={() => faqArray.remove(index)}
                  >
                    <RemoveCircle />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <IconButton
              color="primary"
              onClick={() => faqArray.append({ question: "", answer: "" })}
            >
              <AddCircle />
            </IconButton>
          </Paper>
        </Grid>

        {/* Client Logos Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Client Logos</Typography>
            {clientLogosArray.fields.map((field, index) => (
              <Grid container spacing={1} key={field.id} alignItems="center">
                <Grid item xs={11}>
                  <TextField
                    {...register(`client_logos.${index}`)}
                    label={`Logo ${index + 1} URL`}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="error"
                    onClick={() => clientLogosArray.remove(index)}
                  >
                    <RemoveCircle />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <IconButton
              color="primary"
              onClick={() => clientLogosArray.append({ logo: "" })}
            >
              <AddCircle />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Update About Us Page
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
