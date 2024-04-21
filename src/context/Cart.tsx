import React, { createContext, useState } from "react";

interface CartItem {
  // Define the structure of an item in the cart
  id?: number ; // Unique identifier for the item
  title?: string; // Product name
  price?: string; // Product price
  quantity?: number; // Quantity of the item in the cart
}

interface CartContextValue {
  cart: CartItem[]; // Array of cart items
  addToCart: (item: CartItem) => void; // Function to add an item to the cart
  removeFromCart: (item: CartItem) => void; // Function to remove an item from the cart
  clearCart: () => void; // Function to clear the entire cart
  cartLength: number; // Total number of items in the cart
}

const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartLength: 10,
});

const CartProvider: any = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]); // Manage cart state locally

  const addToCart = (item: CartItem) => {
    // Implement logic to add item to cart (e.g., update array)
    setCart([...cart, item]);
    console.log(item);
    
  };

  const removeFromCart = (item: CartItem) => {
    // Implement logic to remove item from cart (e.g., filter array)
    setCart(cart.filter((cartItem) => cartItem !== item));
  };

  const clearCart = () => {
    // Implement logic to clear cart (e.g., reset state)
    setCart([]);
  };

  const cartLength = cart.reduce((total, item) => total + item.quantity!, 0); // Calculate cart length

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartLength }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
