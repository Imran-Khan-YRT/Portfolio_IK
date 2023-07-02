import React, { useContext } from "react";
import "./Header.css";
import profile_image from "../../assets/imran.png";
import { linkedInLink, listNavBar } from "../data/data";
// import { SunIcons, MoonIcons } from "../Icons/icons";

import ToggleSwitch from "../Icons/toggleSwitch/ToggleSwitch";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { ColorContext } from "../../App";
import { themeSettings } from "../../utils/theme";
// import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
// import {LightMode} from '@mui/icons-material';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  const useTheme = useContext(ColorContext);
  const mode = useTheme.mode;
  const palette = themeSettings(mode).palette;
  const typography = themeSettings(mode).typography;
  console.log(typography);
  return (
    <Box color={typography.color} className="header">
      <div className="nav container">
        {/* image */}
        <a
          className="nav_logo_image_container"
          href={linkedInLink}
          rel="noreferrer"
          target="_blank"
        >
          <img className="image" src={profile_image} alt="profile_image" />
        </a>
        {/* profile Name */}
        <Link href="/my-portfolio/" color="inherit" underline="hover">
          Imran Khan
        </Link>
        <Box>
          <List sx={{ display: "flex" }}>
            {listNavBar.map(({ key, item, icon, href }) => {
              return <ListItem key={key}>{item}</ListItem>;
            })}
            <ListItem className="nav__icons">
              <LightModeOutlinedIcon
                sx={
                  mode === "dark"
                    ? { color: palette.secondary[500] }
                    : { color: "inherit" }
                }
              />
              <ToggleSwitch />
              <DarkModeOutlinedIcon
                sx={
                  mode === "dark"
                    ? { color: "inherit" }
                    : { color: palette.secondary[500] }
                }
              />
            </ListItem>
          </List>
        </Box>
      </div>
      {/* <Typography variant="h3">hdfhndfn</Typography> */}
    </Box>
  );
};

export default Header;
