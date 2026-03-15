import { Box, AppBar, Toolbar, styled, Stack, Button } from "@mui/material";

import { IconLifebuoy, IconGift, IconBriefcase } from "@tabler/icons-react";
import { Typography } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";
import LivePreviewDropdown from "./LivePreviewDropdown";

const Topbar = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "linear-gradient(90deg,#0f0533 0,#1b0a5c 100%)",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "72px",
    },
    zIndex: 9,
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  const GhostButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: "#ffffff00",
    boxShadow: "none",
    borderRadius: "7px",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiButton-startIcon": {
      marginRight: "4px",
    },
  }));

  return <></>;
};

export default Topbar;
