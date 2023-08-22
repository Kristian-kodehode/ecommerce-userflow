import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (product) => {
    setSelectedItems((prevItems) => [...prevItems, product]);
  };

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
