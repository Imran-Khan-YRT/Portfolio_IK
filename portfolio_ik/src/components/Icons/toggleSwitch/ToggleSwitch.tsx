import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { ColorContext } from "../../../App";
import { themeSettings } from "../../../utils/theme";

const ToggleSwitch = () => {
  const useTheme = useContext(ColorContext);
  const mode = useTheme.mode;
  const palette = themeSettings(mode).palette;
  const typography = themeSettings(mode).typography;
  // console.log("themeContextToggle--");
  // console.log(themeContext);
  return (
    <>
      {/* <Typography variant="h2">hdfhndfn</Typography> */}
      <label className="switch">
        <input type="checkbox" onClick={useTheme.toggleColorMode} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
