"use client";
import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  IconButton,
  Box,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import apiClient from "@/app/lib/apiClient";

interface Event {
  id?: number;
  type: "happening" | "upcoming" | "expired";
  title: string;
  description: string;
  date: string;
  month: string;
  time: string;
  location: string;
  link?: string;
  image?: string;
}

export default function EventsAdmin() {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    type: "happening",
    title: "",
    description: "",
    date: "",
    month: "",
    time: "",
    location: "",
    link: "",
    image: "",
  });

  const fetchEvents = async () => {
    try {
      // Axios automatically parses JSON, so we just destructure 'data'
      const { data } = await apiClient.get("/api/events");
      setEvents(data.events || []);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (field: keyof Event, value: string) => {
    setNewEvent((prev) => ({ ...prev, [field]: value }));
  };

  const addEvent = async () => {
    try {
      // apiClient handles headers and JSON.stringify automatically
      await apiClient.post("/api/events", newEvent);

      fetchEvents();
      setNewEvent({
        type: "happening",
        title: "",
        description: "",
        date: "",
        month: "",
        time: "",
        location: "",
        link: "",
        image: "",
      });
    } catch (err) {
      console.error("Failed to add event:", err);
    }
  };

  const deleteEvent = async (id?: number) => {
    if (!id) return;

    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      // In Axios, DELETE with a body requires the 'data' key
      await apiClient.delete("/api/events", {
        data: { id },
      });
      fetchEvents();
    } catch (err) {
      console.error("Failed to delete event:", err);
    }
  };

  return (
    <div>
      <h2>Manage Events</h2>

      <Box mb={2}>
        <Select
          value={newEvent.type}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <MenuItem value="happening">Happening</MenuItem>
          <MenuItem value="upcoming">Upcoming</MenuItem>
          <MenuItem value="expired">Expired</MenuItem>
        </Select>
        <TextField
          label="Title"
          value={newEvent.title}
          onChange={(e) => handleChange("title", e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={newEvent.description}
          onChange={(e) => handleChange("description", e.target.value)}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          label="Date"
          type="date"
          value={newEvent.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
        <TextField
          label="Month"
          value={newEvent.month}
          onChange={(e) => handleChange("month", e.target.value)}
        />
        <TextField
          label="Time"
          value={newEvent.time}
          onChange={(e) => handleChange("time", e.target.value)}
        />
        <TextField
          label="Location"
          value={newEvent.location}
          onChange={(e) => handleChange("location", e.target.value)}
        />
        <TextField
          label="Link"
          value={newEvent.link}
          onChange={(e) => handleChange("link", e.target.value)}
        />
        <TextField
          label="Image URL"
          value={newEvent.image}
          onChange={(e) => handleChange("image", e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addEvent}>
          Add Event
        </Button>
      </Box>

      <div>
        {events.map((ev) => (
          <Box key={ev.id} display="flex" alignItems="center" gap={2} mb={1}>
            <span>{ev.title}</span>
            <IconButton color="error" onClick={() => deleteEvent(ev.id)}>
              <Delete />
            </IconButton>
          </Box>
        ))}
      </div>
    </div>
  );
}
