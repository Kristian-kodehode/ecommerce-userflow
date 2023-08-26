import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedCartItems, setSelectedCartItems] = useState([]);

  const addToCart = (product) => {
    //Can use some method instead of find. gpt means some is more correct
    const isAlreadyInCart = selectedCartItems.find(
      (item) => item.id === product.id
    );
    if (!isAlreadyInCart) {
      setSelectedCartItems((prevItems) => [...prevItems, product]);
      // alert("Item added to cart");
    }
  };

  return (
    <CartContext.Provider
      value={{
        selectedCartItems,
        setSelectedCartItems,
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
