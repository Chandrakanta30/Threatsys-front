"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Stack,
  Chip,
  Divider,
  CircularProgress,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Save as SaveIcon,
  Article as ArticleIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";

export default function AdminBlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form State
  const [mainData, setMainData] = useState({ title: "", author: "", date: "" });
  const [sections, setSections] = useState([
    { title: "", content: "", sort_order: 0 },
  ]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const res = await fetch("/api/blog");
    const data = await res.json();
    setBlogs(data.articles || []);
    setLoading(false);
  };

  const handleEdit = async (id: number) => {
    const res = await fetch(`/api/blog/${id}`);
    const data = await res.json();
    setEditingId(id);
    setMainData({
      title: data.title,
      author: data.author,
      date: data.publish_date,
    });
    setSections(data.sections || []);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (confirm("Permanently delete this blog?")) {
      await fetch(`/api/blog/${id}`, { method: "DELETE" });
      fetchBlogs();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/blog/${editingId}` : "/api/blog";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...mainData, sections }),
    });

    setEditingId(null);
    setMainData({ title: "", author: "", date: "" });
    setSections([{ title: "", content: "", sort_order: 0 }]);
    fetchBlogs();
  };

  return (
    <Box sx={{ bgcolor: "#f4f7fe", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="800" sx={{ mb: 4 }}>
          Blog CMS Dashboard
        </Typography>

        <Grid container spacing={4}>
          {/* 1. EDITOR FORM */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, borderRadius: 3, position: "sticky", top: 20 }}>
              <Typography variant="h6" fontWeight="700" gutterBottom>
                {editingId ? "Edit Article" : "Create New Article"}
              </Typography>
              <Stack spacing={2} component="form" onSubmit={handleSubmit}>
                <TextField
                  label="Article Title"
                  fullWidth
                  size="small"
                  value={mainData.title}
                  onChange={(e) =>
                    setMainData({ ...mainData, title: e.target.value })
                  }
                  required
                />
                <TextField
                  label="Author"
                  fullWidth
                  size="small"
                  value={mainData.author}
                  onChange={(e) =>
                    setMainData({ ...mainData, author: e.target.value })
                  }
                />
                <TextField
                  label="Date"
                  fullWidth
                  size="small"
                  value={mainData.date}
                  onChange={(e) =>
                    setMainData({ ...mainData, date: e.target.value })
                  }
                />

                <Divider sx={{ my: 1 }}>Content Sections</Divider>
                {sections.map((sec, i) => (
                  <Box
                    key={i}
                    sx={{
                      p: 1.5,
                      bgcolor: "#fafafa",
                      borderRadius: 2,
                      border: "1px solid #eee",
                    }}
                  >
                    <TextField
                      label={`TOC Title ${i + 1}`}
                      fullWidth
                      size="small"
                      sx={{ mb: 1 }}
                      value={sec.title}
                      onChange={(e) => {
                        const s = [...sections];
                        s[i].title = e.target.value;
                        setSections(s);
                      }}
                    />
                    <TextField
                      label="Section Content"
                      multiline
                      rows={3}
                      fullWidth
                      size="small"
                      value={sec.content}
                      onChange={(e) => {
                        const s = [...sections];
                        s[i].content = e.target.value;
                        setSections(s);
                      }}
                    />
                  </Box>
                ))}

                <Button
                  variant="contained"
                  type="submit"
                  startIcon={<SaveIcon />}
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  {editingId ? "Update Blog" : "Publish Blog"}
                </Button>
                {editingId && (
                  <Button onClick={() => setEditingId(null)} color="inherit">
                    Cancel
                  </Button>
                )}
              </Stack>
            </Paper>
          </Grid>

          {/* 2. BLOG LIST TABLE */}
          <Grid item xs={12} md={7}>
            <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontWeight="700">
                  All Published Blogs
                </Typography>
                <Chip
                  label={`${blogs.length} Items`}
                  size="small"
                  color="primary"
                />
              </Box>
              <Table>
                <TableHead sx={{ bgcolor: "#fafafa" }}>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Title
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Author
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2" fontWeight="bold">
                        Actions
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={3} align="center" sx={{ py: 5 }}>
                        <CircularProgress size={24} />
                      </TableCell>
                    </TableRow>
                  ) : (
                    blogs.map((blog: any) => (
                      <TableRow key={blog.id} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="600">
                            {blog.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {blog.publish_date}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{blog.author}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="flex-end"
                          >
                            <IconButton
                              size="small"
                              color="primary"
                              onClick={() => handleEdit(blog.id)}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => handleDelete(blog.id)}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
