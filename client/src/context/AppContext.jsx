import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [seller, setSeller] = useState(false);
  const [userLogIn, setUserLogIn] = useState(false);
  const value = {
    navigate,
    user,
    setUser,
    seller,
    setSeller,
    userLogIn,
    setUserLogIn,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useAppContext(AppContext);
};
