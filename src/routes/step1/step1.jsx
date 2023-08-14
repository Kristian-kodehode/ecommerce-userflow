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
        <h5>Select your products</h5>
      </div>
      <ul className={styles.productList}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.productCard}>
              <div>
                <img src={product.image} alt="" />
                <h5>{product.category}</h5>
              </div>

              <div className={styles.cardTitleAndPrice}>
                <h1 className={styles.cardPrice}>$ {product.price}</h1>
                <h3 className={styles.cardTitle}>{product.title}</h3>
              </div>
              <div className={styles.ctaButtons}>
                <button className={styles.buttonBuy}>
                  Add to cart : $ {product.price}
                </button>
                <button className={styles.buttonAdd}>Info</button>
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
