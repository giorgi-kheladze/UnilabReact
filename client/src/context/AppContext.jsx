import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [seller, setSeller] = useState(false);
  const [userLogIn, setUserLogIn] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    seller,
    setSeller,
    userLogIn,
    setUserLogIn,
    products,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
