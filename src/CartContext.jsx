import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (product) => {
    setSelectedItems((prevItems) => [...prevItems, product]);
  };

  const handleIncreaseQuantity = () => {
    setSelectedItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedItems;
    });
    console.log("increase");
  };

  const handleDecreaseQuantity = () => {
    setSelectedItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === product.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedItems;
    });
    console.log("decrease");
  };

  return (
    <CartContext.Provider
      value={{
        selectedItems,
        setSelectedItems,
        addToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
