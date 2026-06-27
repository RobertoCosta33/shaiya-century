import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#c9a227",
    primaryDark: "#8b6914",
    primaryLight: "#e8c547",
    secondary: "#1a2744",
    secondaryLight: "#2a3f6b",
    background: "#0a0e17",
    backgroundAlt: "#111827",
    surface: "#151c2c",
    surfaceHover: "#1e2a42",
    text: "#e8e6e3",
    textMuted: "#8b9cb3",
    textDark: "#0a0e17",
    border: "#2a3548",
    borderGold: "#c9a227",
    error: "#e74c3c",
    success: "#27ae60",
    light: "#f5f0e8",
    alliance: "#4a90d9",
    fury: "#c0392b",
    overlay: "rgba(10, 14, 23, 0.85)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
  fonts: {
    primary: "'Cinzel', 'Segoe UI', serif",
    secondary: "'Inter', 'Segoe UI', sans-serif",
  },
  shadows: {
    sm: "0 0.2rem 0.8rem rgba(0, 0, 0, 0.3)",
    md: "0 0.4rem 1.6rem rgba(0, 0, 0, 0.4)",
    lg: "0 0.8rem 3.2rem rgba(0, 0, 0, 0.5)",
    gold: "0 0 2rem rgba(201, 162, 39, 0.3)",
  },
  transitions: {
    fast: "0.15s ease",
    normal: "0.25s ease",
    slow: "0.4s ease",
  },
};

export default theme;
