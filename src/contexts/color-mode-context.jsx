import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  usingDarkMode: true,
  toggleColorMode: () => {},
});

export function ColorModeContextProvider({ children }) {
  const [usingDarkMode, setUsingDarkMode] = useState(true);

  const value = {
    usingDarkMode: usingDarkMode,
    toggleColorMode: () => setUsingDarkMode(!usingDarkMode),
  };

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
}
