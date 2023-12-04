import { CSSProp, Interpolation, RuleSet } from "styled-components";

export interface ThemeInterface {
  media: {
    min: MediaFunction;
    max: MediaFunction;
    orientation: {
      landscape: MediaFunctionOrientation;
      portrait: MediaFunctionOrientation;
    };
  };
  mediaValues: breakpointValues;
  typography: typographyValues;
  colors: TypeColors;
}

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}

type breakpointsOrientation = "landscape" | "portrait";

type breakpointsSizes =
  /** value equivalent to 240px */
  | "mobileXS"
  /** value equivalent to 320px */
  | "mobileS"
  /** value equivalent to 480px */
  | "mobileM"
  /** value equivalent to 540px */
  | "mobileL"
  /** value equivalent to 640px */
  | "mobileXL"
  /** value equivalent to 720px */
  | "tabletXS"
  /** value equivalent to 750px */
  | "tabletS"
  /** value equivalent to 800px */
  | "tabletM"
  /** value equivalent to 1024px */
  | "tabletL"
  /** value equivalent to 1080px */
  | "tabletXL"
  /** value equivalent to 1280px */
  | "laptopXS"
  /** value equivalent to 1366px */
  | "laptopS"
  /** value equivalent to 1440px */
  | "laptopM"
  /** value equivalent to 1440px */
  | "laptopL"
  /** value equivalent to 1600px */
  | "laptopXL"
  /** value equivalent to 1920px */
  | "desktopXS"
  /** value equivalent to 2160px */
  | "desktopS"
  /** value equivalent to 2560px */
  | "desktopM"
  /** value equivalent to 3840px */
  | "desktopL"
  /** value equivalent to 7680px */
  | "desktopXL";

type ColorVariantReduced =
  /** Céu Limpo */
  | "clearSky"
  // ##57cbdc (Sky Blue)

  /** Parcialmente Nublado */
  | "partlyCloudy"
  // #B0E0E6 (Powder Blue)

  /** Maiormente Nublado */
  | "mostlyCloudy"
  // #778899 (Light Slate Gray)

  /** Nublado */
  | "cloudy"
  // #A9A9A9 (Dark Gray)

  /** Encoberto */
  | "overcast"
  // #808080 (Gray)

  /** Neblina */
  | "foggy"
  // #D3D3D3 (Light Gray)

  /** Névoa Fina */
  | "mist"
  // #E6E6FA (Lavender)

  /** Neblina Seca */
  | "haze"
  // #F0E68C (Khaki)

  /** Chuva */
  | "rain"
  // #616978 (Steel Blue)

  /** Garoa */
  | "drizzle"
  // #87CEFA (Light Sky Blue)

  /** Chuva Congelante */
  | "freezingRain"
  // #B0C4DE (Light Steel Blue)

  /** Neve */
  | "snow"
  // #e0e0e0 (White)

  /** Aguaceiro */
  | "sleet"
  // #ADD8E6 (Light Blue)

  /** Granizo */
  | "hail"
  // #F5F5F5 (White Smoke)

  /** Tempestade com Trovões */
  | "thunderstorm"
  // #556B2F (Dark Olive Green)

  /** Tornado */
  | "tornado"
  // #8B4513 (Saddle Brown)

  /** Furacão/Tufão */
  | "hurricaneTyphoon";
// #8B0000 (Dark Red)

interface typographyValues {
  fontFamily: string;
  fontSize: {
    xxs: string;
    xs: string;
    ssm: string;
    sm: string;
    md: string;
    lg: string;
    ml: string;
    xl: string;
  };
  fontWeight: {
    "100": number;
    "200": number;
    "300": number;
    "400": number;
    "500": number;
    "600": number;
    "700": number;
    "800": number;
    "900": number;
    bold: string;
    bolder: string;
    normal: string;
  };
}

export type MediaFunction = {
  [key in breakpointsSizes]: (...args: Interpolation<object>[]) => CSSProp;
};
export type MediaFunctionOrientation = (
  ...args: Interpolation<object>[]
) => RuleSet<object>;

export type Colors = TypeColors;

interface TypeColors {
  background: string;
  mainColor: string;
  primary: { [key in ColorVariantReduced]: string };
}

export interface breakpointValues {
  mobileXS: number;
  mobileS: number;
  mobileM: number;
  mobileL: number;
  mobileXL: number;
  tabletXS: number;
  tabletS: number;
  tabletM: number;
  tabletL: number;
  tabletXL: number;
  laptopXS: number;
  laptopS: number;
  laptopM: number;
  laptopL: number;
  laptopXL: number;
  desktopXS: number;
  desktopS: number;
  desktopM: number;
  desktopL: number;
  desktopXL: number;
}
