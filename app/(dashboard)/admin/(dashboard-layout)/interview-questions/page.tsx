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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  CircularProgress,
  Stack,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Clear as ClearIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";
import apiClient from "@/app/lib/apiClient";

export default function MuiAdmin() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    link: "",
    author: "",
    date: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      // 1. apiClient uses the baseURL configured in your axios setup
      // 2. No need for .json(), Axios provides the object in res.data
      const res = await apiClient.get("/api/interviewquestions");

      setCourses(res.data);
    } catch (error: any) {
      console.error(
        "Error fetching courses:",
        error.response?.data || error.message
      );
      // Optional: handle specific error states here
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `/api/interviewquestions/${editingId}`
      : "/api/interviewquestions";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    handleReset();
    fetchCourses();
  };

  const handleEdit = (course: any) => {
    setEditingId(course.id);
    setFormData(course);
  };

  const handleReset = () => {
    setEditingId(null);
    setFormData({ title: "", image: "", link: "", author: "", date: "" });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      // 1. Relative path used (baseURL is already https://admin.threatsysacademy.com)
      // 2. JWT token is automatically attached by the apiClient interceptor
      await apiClient.delete(`/api/interviewquestions/${id}`);

      // 3. Refresh the list
      fetchCourses();
    } catch (error: any) {
      console.error("Delete failed:", error.response?.data || error.message);
      alert(
        "Could not delete. You might not have permission or the session expired."
      );
    }
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
          Course Management
        </Typography>

        <Grid container spacing={4}>
          {/* FORM SECTION */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
              >
                {editingId ? (
                  <EditIcon color="primary" />
                ) : (
                  <AddIcon color="primary" />
                )}
                {editingId ? "Edit Course" : "Add New Course"}
              </Typography>

              <Stack component="form" onSubmit={handleSubmit} spacing={2}>
                <TextField
                  label="Course Title"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />

                <TextField
                  label="Image URL"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  required
                />

                <TextField
                  label="Author"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  required
                />

                <TextField
                  label="Date (e.g. Oct 24)"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />

                <TextField
                  label="Course Link"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  startIcon={<SaveIcon />}
                  sx={{ mt: 1 }}
                >
                  {editingId ? "Update" : "Publish"}
                </Button>

                {editingId && (
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={handleReset}
                    startIcon={<ClearIcon />}
                  >
                    Cancel
                  </Button>
                )}
              </Stack>
            </Paper>
          </Grid>

          {/* LIST SECTION */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
              {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", p: 10 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                  {courses.length === 0 && (
                    <Typography
                      align="center"
                      sx={{ py: 10, color: "text.secondary" }}
                    >
                      No courses found.
                    </Typography>
                  )}
                  {courses.map((course: any, index) => (
                    <React.Fragment key={course.id}>
                      <ListItem
                        secondaryAction={
                          <Box>
                            <IconButton
                              edge="end"
                              aria-label="edit"
                              onClick={() => handleEdit(course)}
                              color="info"
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => handleDelete(course.id)}
                              color="error"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            src={course.image}
                            sx={{ width: 56, height: 40, mr: 2 }}
                          >
                            C
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={course.title}
                          secondary={`${course.author} • ${course.date}`}
                        />
                      </ListItem>
                      {index < courses.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                  ))}
                </List>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
