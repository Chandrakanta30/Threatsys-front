"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  // Grid,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import Grid from "@mui/material/GridLegacy";
import apiClient from "@/app/lib/apiClient";

export default function AdminClients() {
  const [clients, setClients] = useState<any[]>([]);
  const [newClient, setNewClient] = useState({
    name: "",
    logo: "",
  });

  const loadClients = async () => {
    const res = await apiClient.get("/api/clients");
    setClients(res.data);
  };

  useEffect(() => {
    loadClients();
  }, []);

  const uploadLogo = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "clients");

    const res = await apiClient.post("/api/upload", formData);

    console.log("Upload successful:", res.data);
    // return res.data;

    const data = await res.data;

    setNewClient({
      ...newClient,
      logo: data.url,
    });
  };

  const addClient = async () => {
    try {
      // 1. apiClient prepends the baseURL and attaches the Auth token
      await apiClient.post("/api/clients", newClient);

      // 2. Clear form and refresh UI
      setNewClient({ name: "", logo: "" });
      loadClients();
    } catch (error: any) {
      console.error(
        "Failed to add client:",
        error.response?.data || error.message
      );
    }
  };

  const deleteClient = async (id: number) => {
    if (!confirm("Remove this client from the list?")) return;

    try {
      // 3. Use the 'params' object for cleaner query strings (?id=X)
      await apiClient.delete("/api/clients", {
        params: { id },
      });

      loadClients();
    } catch (error: any) {
      console.error(
        "Failed to delete client:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Add Client */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5">Add Client</Typography>

          <TextField
            label="Client Name"
            fullWidth
            sx={{ my: 1 }}
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
          />

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadLogo(file);
            }}
          />

          {newClient.logo && (
            <img src={newClient.logo} style={{ width: 120, marginTop: 10 }} />
          )}

          <Button variant="contained" sx={{ mt: 2 }} onClick={addClient}>
            Add Client
          </Button>
        </Paper>
      </Grid>

      {/* Clients List */}
      {clients.map((client) => (
        <Grid item xs={12} md={3} key={client.id}>
          <Paper sx={{ p: 2 }}>
            <img
              src={client.logo_url}
              style={{ width: "100%", height: 80, objectFit: "contain" }}
            />

            <Typography sx={{ mt: 1 }}>{client.name}</Typography>

            <IconButton color="error" onClick={() => deleteClient(client.id)}>
              <Delete />
            </IconButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
