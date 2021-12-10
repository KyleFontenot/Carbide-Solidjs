import { createContext, useContext } from "solid-js";

const ThemeProvider = createContext();

export function ContextProvider() {
  const theme = {
    colors: {
      primary: "#41A0D8",
      secondary: "#88D6FB",
      tertiary: "#2D7097",
      lightgrey: "#efefef",
      semidark: "#484848",
      dark: "#333",
    },
    breakpoints: {
      mobile: "425px",
      tablet: "768px",
      desktop: "1024px",
    },
  };
  return (
    <ThemeProvider.Provider value={theme}>
      {props.children}
    </ThemeProvider.Provider>
  );
}

// exports useTheme as a hook to grab the theme.
export function useTheme() {
  return useContext(ThemeProvider);
}
