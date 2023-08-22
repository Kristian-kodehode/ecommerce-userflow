import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../CartContext";

const ItemPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched product data:", data);
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [itemId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
    console.log("Clicked");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button className="buttonadd" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemPage;
