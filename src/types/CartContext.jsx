import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

 const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    return Array.isArray(parsedCart) ? parsedCart : [];
  });

  useEffect(() => {
    // localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const allJob = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={allJob}> {children} </CartContext.Provider>
  );
};
