"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import {
  TrendingUp,
  PeopleAlt,
  AttachMoney,
  Autorenew,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import apiClient from "@/app/lib/apiClient";
import Grid from "@mui/material/GridLegacy";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    revenue: 0,
    reenrolled: 0,
    monthlyJoining: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await apiClient.get("/api/dashboard/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Dashboard failed to load", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* --- STAT CARDS --- */}
        <Grid item xs={12} sm={4}>
          <StatCard
            title="Total Students"
            value={stats.totalStudents}
            icon={<PeopleAlt sx={{ color: "#3b82f6" }} />}
            color="#3b82f6"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard
            title="Total Revenue"
            value={`$${stats.revenue.toLocaleString()}`}
            icon={<AttachMoney sx={{ color: "#10b981" }} />}
            color="#10b981"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard
            title="Re-enrolled"
            value={`${stats.reenrolled}%`}
            icon={<Autorenew sx={{ color: "#8b5cf6" }} />}
            color="#8b5cf6"
          />
        </Grid>

        {/* --- GRAPHS --- */}
        <Grid item xs={12} md={6}>
          <ChartWrapper title="Student Joining Trend">
            <LineChart data={stats.monthlyJoining}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#eee"
              />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#3b82f6"
                strokeWidth={4}
                dot={{ r: 6, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ChartWrapper>
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartWrapper title="Revenue Distribution">
            <BarChart data={stats.monthlyJoining}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#eee"
              />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: "#f5f5f5" }} />
              <Bar
                dataKey="revenue"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ChartWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

// --- Helper Components ---

const StatCard = ({ title, value, icon, color }: any) => (
  <Card
    sx={{ borderLeft: `6px solid ${color}`, borderRadius: 2, boxShadow: 1 }}
  >
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            color="textSecondary"
            variant="overline"
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "800", mt: 1 }}>
            {value}
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: `${color}15`, p: 1, borderRadius: 2 }}>
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const ChartWrapper = ({ title, children }: any) => (
  <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2 }}>
    <Typography
      variant="h6"
      sx={{ mb: 2, px: 1, fontWeight: 600, color: "#374151" }}
    >
      {title}
    </Typography>
    <Divider sx={{ mb: 3 }} />
    <Box sx={{ height: 300, width: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </Box>
  </Card>
);

export default AdminDashboard;
