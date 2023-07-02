import { PaletteMode, createTheme } from "@mui/material";
import React from "react";

export const tokens = {
  white: {
    100: "#fefefe",
    200: "#fefefe",
    300: "#fdfdfd",
    400: "#fdfdfd",
    500: "#fcfcfc",
    600: "#cacaca",
    700: "#979797",
    800: "#656565",
    900: "#323232",
  },
  black: {
    100: "#d4d4d4",
    200: "#a9a9a9",
    300: "#7e7e7d",
    400: "#535352",
    500: "#282827",
    600: "#20201f",
    700: "#181817",
    800: "#101010",
    900: "#080808",
  },
  gray: {
    100: "#f0f0f1",
    200: "#e0e2e2",
    300: "#d1d3d4",
    400: "#c1c5c5",
    500: "#b2b6b7",
    600: "#8e9292",
    700: "#6b6d6e",
    800: "#474949",
    900: "#242425",
  },
  primary: {
    // light green
    100: "#d0fcf4",
    200: "#a0f9e9",
    300: "#71f5de",
    400: "#41f2d3",
    500: "#12efc8",
    600: "#0ebfa0",
    700: "#0b8f78",
    800: "#076050",
    900: "#043028",
  },
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
};

// mui theme settings

export const themeSettings = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ["sans-serif", "Inter"].join(","),
    fontSize: 14,
    fontWeight: 900,
    mode,
    ...(mode === "light"
      ? {
          color: tokens.gray[800],
          h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
          },
          h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24,
            color: tokens.primary[500],
          },
          h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20,
            fontWeight: 100,
            color: tokens.primary[500],
          },
          h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: 600,
            color: tokens.gray[300],
          },
          h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: 400,
            color: tokens.gray[500],
          },
          h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: tokens.gray[700],
          },
        }
      : {
          color: tokens.gray[500],
          h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
          },
          h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 16,
            color: tokens.primary[500],
          },
          h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: tokens.primary[500],
          },
          h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: 600,
            color: tokens.gray[300],
          },
          h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: 400,
            color: tokens.gray[500],
          },
          h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: tokens.gray[700],
          },
        }),
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // primary: {
          //   ...tokens.primary,
          //   main: tokens.primary[500],
          //   light: tokens.primary[400],
          // },
          secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
          },
          // tertiary: {
          //   ...tokens.tertiary,
          // },
          gray: {
            ...tokens.gray,
            main: tokens.gray[500],
          },
          background: {
            default: tokens.white[500],
            light: tokens.white[300],
            dark: tokens.white[700],
          },
        }
      : {
          // primary: {
          //   ...tokens.primary,
          //   main: tokens.primary[500],
          //   light: tokens.primary[400],
          // },
          secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
          },
          // tertiary: {
          //   ...tokens.tertiary,
          // },
          // gray: {
          //   ...tokens.gray,
          //   main: tokens.gray[500],
          // },
          background: {
            default: tokens.black[500],
            light: tokens.black[300],
            dark: tokens.black[700],
          },
        }),
  },
});

// export const theme = createTheme(themeSettings("dark"));

// export const colorMode = {
//   toggleColorMode: () => {
//     theme.palette.mode = theme.palette.mode === "dark" ? "light" : "dark";
//   },
//   theme,
// };
