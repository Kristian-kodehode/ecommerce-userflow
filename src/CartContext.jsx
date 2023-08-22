import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (product) => {
    setSelectedItems((prevItems) => [...prevItems, product]);
  };

  //Placeholder for a function to empty cart
  // const emptyCart = () => {}

  return (
    <CartContext.Provider
      value={{ selectedItems, setSelectedItems, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
