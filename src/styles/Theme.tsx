import { css } from "styled-components";
import { Interpolation } from "styled-components/dist/types";
import { Colors, MediaFunction, ThemeInterface } from "./ThemeTypes";

export const breakpointsSizes = {
  /** Width equivalent to 240px */
  mobileXS: 240,
  /** Width equivalent to 320px */
  mobileS: 320,
  /** Width equivalent to 480px */
  mobileM: 480,
  /** Width equivalent to 540px */
  mobileL: 540,
  /** Width equivalent to 640px */
  mobileXL: 640,
  /** Width equivalent to 720px */
  tabletXS: 720,
  /** Width equivalent to 750px */
  tabletS: 750,
  /** Width equivalent to 800px */
  tabletM: 800,
  /** Width equivalent to 1024px */
  tabletL: 1024,
  /** Width equivalent to 1080px */
  tabletXL: 1080,
  /** Width equivalent to 1280px */
  laptopXS: 1280,
  /** Width equivalent to 1366px */
  laptopS: 1366,
  /** Width equivalent to 1440px */
  laptopM: 1440,
  /** Width equivalent to 1517px */
  laptopL: 1517,
  /** Width equivalent to 1600px */
  laptopXL: 1600,
  /** Width equivalent to 1920px */
  desktopXS: 1920,
  /** Width equivalent to 2160px */
  desktopS: 2160,
  /** Width equivalent to 2560px */
  desktopM: 2560,
  /** Width equivalent to 3840px */
  desktopL: 3840,
  /** Width equivalent to 7680px */
  desktopXL: 7680,
};

const typography = {
  fontFamily: "Open Sans",
  fontSize: {
    /**xxs: value equivalent to 12px */
    xxs: "12px",
    /**xs: value equivalent to 14px */
    xs: "14px",
    /**ssm: value equivalent to 16px */
    ssm: "16px",
    /**sm: value equivalent to 18px */
    sm: "18px",
    /**md: value equivalent to 24px */
    md: "24px",
    /**lg: value equivalent to 32px */
    lg: "32px",
    /**ml: value equivalent to 36px */
    ml: "36px",
    /**xl: value equivalent to 64px */
    xl: "64px",
  },
  fontWeight: {
    "100": 100,
    "200": 200,
    "300": 300,
    "400": 400,
    "500": 500,
    "600": 600,
    "700": 700,
    "800": 800,
    "900": 900,
    bold: "bold",
    bolder: "bolder",
    normal: "normal",
  },
};

type Size = keyof typeof breakpointsSizes;

const media = (type: "min" | "max"): MediaFunction =>
  Object.keys(breakpointsSizes).reduce((acc: any, label) => {
    acc[label] = (...args: Interpolation<object>[]) => css`
      @media (${type}-width: ${breakpointsSizes[label as Size]}px) {
        ${css`
          ${args}
        `};
      }
    `;
    return acc;
  }, {} as MediaFunction);

const mediaType = { min: media("min"), max: media("max") };

const colors: Colors = {
  light: {
    background: "#0f0f0f",
    primary: {
      clearSky: "#57cbdc",
      partlyCloudy: "#B0E0E6",
      mostlyCloudy: "#778899",
      cloudy: "#A9A9A9",
      overcast: "#808080",
      foggy: "#D3D3D3",
      mist: "#E6E6FA",
      haze: "#F0E68C",
      rain: "#616978",
      drizzle: "#87CEFA",
      freezingRain: "#B0C4DE",
      snow: "#e0e0e0",
      sleet: "#ADD8E6",
      hail: "#F5F5F5",
      thunderstorm: "#556B2F",
      tornado: "#8B4513",
      hurricaneTyphoon: "#8B0000",
    },
  },
  dark: {
    background: "#0f0f0f",
    primary: {
      clearSky: "#57cbdc",
      partlyCloudy: "#6BA8B8",
      mostlyCloudy: "#536573",
      cloudy: "#757575",
      overcast: "#555555",
      foggy: "#AFAFAF",
      mist: "#C8C8E0",
      haze: "#C8B560",
      rain: "#2C5C87",
      drizzle: "#5D9AC7",
      freezingRain: "#829EB8",
      snow: "#E5E5E5",
      sleet: "#84B7D1",
      hail: "#D5D5D5",
      thunderstorm: "#3A4E25",
      tornado: "#5E3D1E",
      hurricaneTyphoon: "#5E0000",
    },
  },
};

const theme = (mode: "light" | "dark"): ThemeInterface => {
  return {
    media: mediaType,
    mediaValues: breakpointsSizes,
    colors: colors[mode],
    typography: typography,
  };
};

export default theme;
