import React from "react";

import "./components/Style/App.css";
import { Header } from "./components";
import { Box, CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./utils/theme";
import { MoonIcons, SunIcons } from "./components/Icons/icons";
import ToggleSwitch from "./components/Icons/toggleSwitch/ToggleSwitch";

interface ColorContextSchema {
  // theme: {};
  toggleColorMode: () => void;
  mode: PaletteMode;
}

export const ColorContext = React.createContext<ColorContextSchema>(
  {} as ColorContextSchema
);

const App: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
        console.log("mode-" + mode);
      },
      // theme,
      mode,
    }),
    [mode]
  );
  return (
    <div>
      <ColorContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <Header />
          </Box>
        </ThemeProvider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
