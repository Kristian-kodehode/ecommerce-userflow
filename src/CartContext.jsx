import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (product) => {
    //Can use some method instead of find. gpt means some is more correct
    const isAlreadyInCart = selectedItems.find(
      (item) => item.id === product.id
    );
    if (!isAlreadyInCart) {
      setSelectedItems((prevItems) => [...prevItems, product]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        selectedItems,
        setSelectedItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
