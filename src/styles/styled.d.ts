import "styled-components";

type ThemeColors = {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  surfaceHover: string;
  text: string;
  textMuted: string;
  textDark: string;
  border: string;
  borderGold: string;
  error: string;
  success: string;
  light: string;
  alliance: string;
  fury: string;
  overlay: string;
};

type ThemeBreakpoints = {
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
};

type ThemeFonts = {
  primary: string;
  secondary: string;
};

type ThemeShadows = {
  sm: string;
  md: string;
  lg: string;
  gold: string;
};

type ThemeTransitions = {
  fast: string;
  normal: string;
  slow: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
    breakpoints: ThemeBreakpoints;
    fonts: ThemeFonts;
    shadows: ThemeShadows;
    transitions: ThemeTransitions;
  }
}
