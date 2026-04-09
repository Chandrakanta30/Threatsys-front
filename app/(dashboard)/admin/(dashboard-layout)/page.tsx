"use client";
import { Grid, Box } from "@mui/material";
// components
import SalesOverview from "@/app/(dashboard)/admin/(dashboard-layout)/components/dashboard/TheSalesOverview";
import OurVisitors from "@/app/(dashboard)/admin/(dashboard-layout)/components/dashboard/TheOurVisitors";
import ProfileCard from "@/app/(dashboard)/admin/(dashboard-layout)/components/dashboard/TheProfileCard";
import MyContacts from "@/app/(dashboard)/admin/(dashboard-layout)/components/dashboard/TheMyContacts";
import ActivityTimeline from "@/app/(dashboard)/admin/(dashboard-layout)/components/dashboard/TheActivityTimeline";

const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid
          size={{
            xs: 12,
            lg: 8,
          }}
        >
          <SalesOverview />
        </Grid>
        <Grid
          size={{
            xs: 12,
            lg: 4,
          }}
        >
          <OurVisitors />
        </Grid>
        <Grid
          size={{
            xs: 12,
            lg: 4,
          }}
        >
          <Grid container spacing={3}>
            <Grid size={12}>
              <ProfileCard />
            </Grid>
            <Grid size={12}>
              <MyContacts />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={{
            xs: 12,
            lg: 8,
          }}
        >
          <ActivityTimeline />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
