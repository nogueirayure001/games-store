import { createContext, useState } from "react";

const MODE = "prefferredMode";

export const ColorModeContext = createContext({
  usingDarkMode: true,
  toggleColorMode: () => {},
});

export function ColorModeContextProvider({ children }) {
  const [usingDarkMode, setUsingDarkMode] = useState(
    localStorage.getItem(MODE) ? JSON.parse(localStorage.getItem(MODE)) : true
  );

  const value = {
    usingDarkMode: usingDarkMode,
    toggleColorMode: () => {
      localStorage.setItem(MODE, !usingDarkMode);
      setUsingDarkMode(!usingDarkMode);
    },
  };

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
}
