import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../CartContext";
import styles from "./itemPage.module.css";
import RenderStars from "../../components/rating";

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
    <>
      <div className={styles.itempagecontainer}>
        <div className={styles.itemcontainer}>
          <img className={styles.itemimage} src={product.image} alt="" />
          <div>
            {" "}
            <div className={styles.desktoptext}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div className={styles.priceandrating}>
              <h1>$ {product.price}</h1>
              <RenderStars
                rating={product.rating.rate}
                ratingcount={product.rating.count}
              />
            </div>
            <button className="buttonadd" onClick={handleAddToCart}>
              Add to cart
            </button>
            <div className={styles.mobiletext}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
