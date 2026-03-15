"use client";
import { styled, Container, Box, useTheme } from "@mui/material";
import React from "react";

import Header from "@/app/(dashboard)/admin/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(dashboard)/admin/app/(DashboardLayout)/layout/sidebar/Sidebar";
import Footer from "./layout/footer/page";
import Topbar from "./layout/header/Topbar";

const MainWrapper = styled("div")(() => ({}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  paddingBottom: "25px",
  zIndex: 1,
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <MainWrapper className="mainwrapper">
      {/* <Topbar /> */}
      {/* ------------------------------------------- */}
      {/* Header */}
      {/* ------------------------------------------- */}
      <Header />

      <Sidebar />

      {/* ------------------------------------------- */}
      {/* page Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper
        className="page-wrapper"
        sx={{
          [theme.breakpoints.up("lg")]: {
            ml: `270px`,
          },
          marginTop: "64px",
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar */}
        {/* ------------------------------------------- */}

        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Container
          sx={{
            paddingTop: "30px",
            margin: "0px",
            maxWidth: "100%",
            minHeight: "calc(100vh - 20px)",
          }}
        >
          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          <Box>{children}</Box>
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}

          {/* ------------------------------------------- */}
          {/* Footer */}
          {/* ------------------------------------------- */}
        </Container>
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
}
