import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <a href="https://github.com/ztha952">
          <GitHubIcon style={{ fontSize: "2.5rem" }} />
        </a>
        <a href="https://twitter.com/Nao5920">
          <TwitterIcon style={{ fontSize: "2.5rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/zaw-tint-61a319201/">
          <LinkedInIcon style={{ fontSize: "2.5rem" }} />
        </a>
      </Container>
    </AppBar>
  );
};

export default Footer;
