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

export default function AdminClients() {
  const [clients, setClients] = useState<any[]>([]);
  const [newClient, setNewClient] = useState({
    name: "",
    logo: "",
  });

  const loadClients = async () => {
    const res = await axios.get("/api/clients");
    setClients(res.data);
  };

  useEffect(() => {
    loadClients();
  }, []);

  const uploadLogo = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "clients");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setNewClient({
      ...newClient,
      logo: data.url,
    });
  };

  const addClient = async () => {
    await axios.post("/api/clients", newClient);
    setNewClient({ name: "", logo: "" });
    loadClients();
  };

  const deleteClient = async (id: number) => {
    await axios.delete(`/api/clients?id=${id}`);
    loadClients();
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
