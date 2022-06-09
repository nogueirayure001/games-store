import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setCurrentUser: () => {},
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = {
    user: user,
    setCurrentUser: (user) => setUser(user),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
