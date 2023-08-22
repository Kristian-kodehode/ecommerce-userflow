import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched product data:", data);
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display detailed information about the product */}
      <h2>{product.title}</h2>
      <button>Add to cart</button>
      {/* Display other product details */}
    </div>
  );
};

export default ItemPage;
