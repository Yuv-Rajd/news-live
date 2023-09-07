import { Typography } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <>
      <div className="fixed-top ">
        <Box sx={{ flexGrow: 1,}}>
          <AppBar position="static" >
            <Toolbar sx={{margin:"0 70px 0 70px" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News App
              </Typography>
              <Tooltip title="Play Store">
                <Button color="inherit">
                  <AndroidIcon />
                </Button>
              </Tooltip>
              <Tooltip title="App Store">
                <Button color="inherit">
                  <AppleIcon />
                </Button>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}
export default Header;
