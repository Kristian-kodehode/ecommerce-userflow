import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import styles from "./step1.module.css";
import RenderStars from "../../components/rating.jsx";

const Step1 = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart, selectedItems, setSelectedItems } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //Product Filtering With Buttons
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  const categories = [
    "Show All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const handleAddToCart = (product) => {
    if (product) {
      addToCart(product);
    }
    console.log("Product added to cart from ItemPage");
  };

  return (
    <div className={styles.step1Container}>
      <div className={styles.headingscontainer}>
        <h1>Products</h1>
        <h6>Select your products</h6>
      </div>
      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? styles.activeCategory : ""
            }
            onClick={() =>
              setSelectedCategory(category === "Show All" ? null : category)
            }
          >
            {category}
          </button>
        ))}
      </div>
      <ul className={styles.productList}>
        {filteredProducts.map((product) => {
          return (
            <>
              <div key={product.id} className={styles.productCard}>
                <Link to={`/itemPage/${product.id}`} key={product.id}>
                  <div>
                    <img
                      src={product.image}
                      className={styles.imagestep1}
                      alt=""
                    />
                    <div className={styles.headingandcategory}>
                      <div className={styles.cardCategory}>
                        {product.category}
                      </div>
                      <h6 className={styles.cardTitle}>{product.title}</h6>
                    </div>
                  </div>
                </Link>
                <div className={styles.priceandcta}>
                  <div className={styles.priceandrating}>
                    <h4 className={styles.cardPrice}>$ {product.price}</h4>
                    <RenderStars
                      rating={product.rating.rate}
                      ratingcount={product.rating.count}
                    />
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </ul>

      {/* <Link to="/step2">Next Step</Link> */}
    </div>
  );
};

export default Step1;
