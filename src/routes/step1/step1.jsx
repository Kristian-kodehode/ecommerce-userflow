import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./step1.module.css";

const Step1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.step1Container}>
      <div className={styles.headingscontainer}>
        <h1>Products</h1>
        <h6>Select your products</h6>
      </div>
      <ul className={styles.productList}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.productCard}>
              <div>
                <img src={product.image} alt="" />
                <div className={styles.priceAndRating}>
                  <h6 className={styles.cardCategory}>{product.category}</h6>
                  <h6 className={styles.cardRating}>
                    Rating: {product.rating.rate} ({product.rating.count})
                  </h6>
                </div>
              </div>

              <div className={styles.cardTitleAndPrice}>
                <h4 className={styles.cardTitle}>{product.title}</h4>
                <h4 className={styles.cardPrice}>$ {product.price}</h4>
              </div>
              <div className={styles.ctaButtons}>
                <button className={styles.buttonAdd}>Add to cart</button>
                <button className={styles.buttonInfo}>Info</button>
              </div>
            </div>
          );
        })}
      </ul>
      {/* Add your content for selecting an item here */}
      <Link to="/step2">Next Step</Link>
    </div>
  );
};

export default Step1;
