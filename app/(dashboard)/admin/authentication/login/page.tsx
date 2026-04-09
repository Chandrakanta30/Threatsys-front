"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  Card,
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";

import apiClient from "@/app/lib/apiClient"; // Using the instance we created earlier
import CustomTextField from "../../(dashboard-layout)/components/forms/theme-elements/CustomTextField";

const Login2 = () => {
  const router = useRouter();
  const [email, setEmail] = useState(""); // Changed to email to match our API
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await apiClient.post("api/auth/login", {
        email,
        password,
      });

      // Save token to session storage
      sessionStorage.setItem("token", response.data.token);

      // Redirect to dashboard
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.error || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: "0.3",
        },
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={12}
          lg={4}
          xl={3}
        >
          <Card
            elevation={9}
            sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Typography variant="h5" fontWeight={700} textAlign="center">
                  Sign In
                </Typography>

                {error && <Alert severity="error">{error}</Alert>}

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    component="label"
                    htmlFor="email"
                    mb="5px"
                  >
                    Email Address
                  </Typography>
                  <CustomTextField
                    id="email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    required
                  />
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    component="label"
                    htmlFor="password"
                    mb="5px"
                  >
                    Password
                  </Typography>
                  <CustomTextField
                    id="password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    required
                  />
                </Box>

                <Stack
                  justifyContent="space-between"
                  direction="row"
                  alignItems="center"
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember this Device"
                    />
                  </FormGroup>
                  <Typography
                    component={Link}
                    href="/forgot-password"
                    fontWeight="500"
                    sx={{ textDecoration: "none", color: "primary.main" }}
                  >
                    Forgot Password?
                  </Typography>
                </Stack>

                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </Stack>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login2;
