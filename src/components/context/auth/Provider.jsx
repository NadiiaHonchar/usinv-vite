import { useMemo, useState } from "react";
import authContext from "./Context";
import avatar from "./avatar.png";

export default function Provider({ children }) {
  const [user, setUser] = useState({ name: "Avatar", avatar });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLogIn = () => {
    setUser({ name: "Avatar", avatar });
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut };
  }, [isLoggedIn, user]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
