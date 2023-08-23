import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import styles from "./itemPage.module.css";
import RenderStars from "../../components/rating";
// import { preview } from "vite";

const ItemPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const {
    addToCart,
    selectedItems,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useCart();

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
    console.log("Product added to cart");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.itempagecontainer}>
        <span className={styles.itempagedirection}>
          <Link className={styles.itempagecategory} to="/">
            {" "}
            Go back
          </Link>
          <div>{product.category}</div>
        </span>
        <div className={styles.itemcontainer}>
          <img className={styles.itemimage} src={product.image} alt="" />
          <div>
            {" "}
            <div className={styles.desktoptext}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div className={styles.priceandrating}>
              <h2>$ {product.price}</h2>
              <RenderStars
                rating={product.rating.rate}
                ratingcount={product.rating.count}
              />
            </div>
            <div>
              <button className="buttonadd" onClick={handleAddToCart}>
                Add to cart
              </button>
              {/* <div>
                Quantity:{" "}
                {selectedItems.find((item) => item.id === product.id)
                  ?.quantity || 0}
              </div>
              <button onClick={() => handleDecreaseQuantity(product.id)}>
                -
              </button>
              <button onClick={() => handleIncreaseQuantity(product.id)}>
                +
              </button> */}
            </div>
          </div>
          <div className={styles.mobiletext}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
