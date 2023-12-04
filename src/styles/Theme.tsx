import { css } from "styled-components";
import { Interpolation } from "styled-components/dist/types";
import {
  Colors,
  MediaFunction,
  MediaFunctionOrientation,
  ThemeInterface,
} from "./ThemeTypes";

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

const media = (type: "min" | "max" | "orientation"): MediaFunction =>
  Object.keys(breakpointsSizes).reduce((acc: any, label) => {
    if (type === "orientation") {
      acc[type] = (...args: Interpolation<object>[]) => css`
        @media (orientation: landscape) {
          ${css`
            ${args}
          `};
        }
      `;
    } else {
      acc[label as Size] = (...args: Interpolation<object>[]) => css`
        @media (${type}-width: ${breakpointsSizes[label as Size]}px) {
          ${css`
            ${args}
          `};
        }
      `;
    }
    return acc;
  }, {} as MediaFunction);
const mediaorientation = (
  type: "landscape" | "portrait"
): MediaFunctionOrientation => {
  return (...args: Interpolation<object>[]) => css`
    @media (orientation: ${type}) {
      ${css`
        ${args}
      `};
    }
  `;
};

const mediaType = {
  min: media("min"),
  max: media("max"),
  orientation: {
    landscape: mediaorientation("landscape"),
    portrait: mediaorientation("portrait"),
  },
};

const colors: Colors = {
  mainColor: "#fff",
  secodaryColor: "#0f0f0f",
  primary: {
    clearSky: `linear-gradient(180deg,rgba(86, 203, 219, 1) 0%,rgba(58, 158, 178, 1) 100%)`,
    partlyCloudy: "#B0E0E6",
    mostlyCloudy: "#778899",
    cloudy:
      "linear-gradient(180deg, rgb(213 213 213) 0%, rgba(52,164,184,1) 100%)",
    overcast: "#808080",
    foggy: "#D3D3D3",
    mist: "linear-gradient(180deg, rgba(153,153,153,1) 0%, rgba(153,153,153,1) 100%)",
    haze: "#F0E68C",
    rain: `linear-gradient(180deg, rgba(97,105,120,1) 0%, rgba(65,72,88,1) 100%);`,
    drizzle:
      "linear-gradient(180deg, rgba(224,226,227,1) 0%, rgb(99 163 231) 38%, rgba(52,164,184,1) 100%)",
    freezingRain: "#B0C4DE",
    snow: "linear-gradient(180deg, rgba(224,224,224,1) 0%, rgba(172,172,172,1) 100%);",
    sleet: "#ADD8E6",
    hail: "#F5F5F5",
    thunderstorm:
      "linear-gradient(180deg, rgb(1 21 33) 0%, rgb(99 97 97) 100%)",
    tornado: "#8B4513",
    hurricaneTyphoon: "#8B0000",
  },
};

const weatherData = [
  {
    id: 200,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 201,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 202,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 210,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 211,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 212,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 221,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 230,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 231,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },
  {
    id: 232,
    main: "Thunderstorm",
    background: colors.primary.thunderstorm,
    mainColor: colors.mainColor,
  },

  {
    id: 300,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 301,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 302,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 310,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 311,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 312,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 313,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 314,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },
  {
    id: 321,
    main: "Drizzle",
    background: colors.primary.drizzle,
    mainColor: colors.mainColor,
  },

  {
    id: 500,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 501,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 502,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 503,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 504,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 511,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 520,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 521,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 522,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },
  {
    id: 531,
    main: "Rain",
    background: colors.primary.rain,
    mainColor: colors.mainColor,
  },

  {
    id: 600,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 601,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 602,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 611,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 612,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 613,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 615,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 616,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 620,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 621,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },
  {
    id: 622,
    main: "Snow",
    background: colors.primary.snow,
    mainColor: colors.secodaryColor,
  },

  {
    id: 701,
    main: "Mist",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 711,
    main: "Smoke",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 721,
    main: "Haze",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 731,
    main: "Dust",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 741,
    main: "Fog",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 751,
    main: "Sand",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 761,
    main: "Dust",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 762,
    main: "Ash",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 771,
    main: "Squall",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },
  {
    id: 781,
    main: "Tornado",
    background: colors.primary.mist,
    mainColor: colors.mainColor,
  },

  {
    id: 800,
    main: "Clear",
    background: colors.primary.clearSky,
    mainColor: colors.mainColor,
  },
  {
    id: 800,
    main: "Clear",
    background: colors.primary.clearSky,
    mainColor: colors.mainColor,
  },

  {
    id: 801,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
  {
    id: 801,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
  {
    id: 802,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
  {
    id: 802,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
  {
    id: 803,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
  {
    id: 803,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
  {
    id: 804,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
  {
    id: 804,
    main: "Clouds",
    background: colors.primary.cloudy,
    mainColor: colors.mainColor,
  },
];

const theme = (climaticCod: number): ThemeInterface => {
  return {
    media: mediaType,
    mediaValues: breakpointsSizes,
    colors: {
      colors,
      main: {
        color:
          weatherData.find((val) => val.id === climaticCod)?.mainColor ??
          colors.mainColor,
        background:
          weatherData.find((val) => val.id === climaticCod)?.background ??
          "#fff",
      },
    },
    typography: typography,
  };
};

export default theme;
