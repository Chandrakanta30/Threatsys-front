"use client";
import React, { createContext, useContext, useState, useMemo } from "react";
import { Backdrop, Box, Container, Skeleton, Stack } from "@mui/material";

const LoadingContext = createContext({
  showLoader: () => {},
  hideLoader: () => {},
});

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeRequests, setActiveRequests] = useState(0);

  const showLoader = () => setActiveRequests((prev) => prev + 1);
  const hideLoader = () => setActiveRequests((prev) => Math.max(0, prev - 1));

  const isLoading = activeRequests > 0;

  return (
    <LoadingContext.Provider value={{ showLoader, hideLoader }}>
      {children}

      {/* GLOBAL FULL SCREEN SKELETON */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "rgba(255,255,255,0.8)",
        }}
        open={isLoading}
      >
        <Container maxWidth="md">
          <Stack spacing={2}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={60}
              sx={{ borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={400}
              sx={{ borderRadius: 4 }}
            />
            <Stack direction="row" spacing={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width="80%" height={40} />
            </Stack>
          </Stack>
        </Container>
      </Backdrop>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
