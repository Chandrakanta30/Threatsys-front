"use client";
import { Grid } from "@mui/material";
import ProductPerfomance from "@/app/(dashboard)/admin/(dashboard-layout)/components/dashboard/ProductPerformance";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid
        size={{
          xs: 12,
          lg: 12,
        }}
      >
        <ProductPerfomance />
      </Grid>
    </Grid>
  );
};

export default Tables;
