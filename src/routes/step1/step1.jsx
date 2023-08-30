import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import styles from "./step1.module.css";
import RenderStars from "../../components/rating.jsx";
import OverlayPage from "../overlayPage/overlayPage";
import SkeletonLoader from "../skeletonLoader/skeletonLoader";

const Step1 = () => {
  const [products, setProducts] = useState([]); //Fetched Api Products
  const [searchInput, setSearchInput] = useState(""); //Search Input
  const [categorySelector, setCategorySelector] = useState("All"); //Category Buttons
  const [addedProducts, setAddedProducts] = useState([]);
  const { addToCart } = useCart(); //, selectedCartItems, setSelectedCartItems - these two not needed?
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchedProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      (categorySelector === "All" || product.category === categorySelector)
  );

  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  const handleAddToCart = (product) => {
    if (product) {
      const isAlreadyAdded = addedProducts.includes(product.id);
      if (!isAlreadyAdded) {
        addToCart(product);
        setAddedProducts((prevAddedProducts) => [
          ...prevAddedProducts,
          product.id,
        ]);
        setShowOverlay(true);
        navigate("/overlay");
      }
    }
    console.log("Product added to cart from ItemPage");
  };

  return (
    <div className={styles.step1Container}>
      <div className={styles.headingscontainer}>
        <h1>Products</h1>
        <div className={styles.searchbar}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for product..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={styles.searchinput}
          />
        </div>
      </div>

      <div className={styles.categoryButtons}>
        <button
          style={{
            // backgroundColor: categorySelector === "All" ? "#333333" : "",
            borderColor: categorySelector == "All" ? "#333333" : "",
            // color: categorySelector === "All" ? "white" : "",
          }}
          onClick={() => setCategorySelector("All")}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              borderColor: categorySelector == category ? "#333333" : "",
              // backgroundColor: categorySelector === category ? "#333333" : "",
              // color: categorySelector === category ? "white" : "",
            }}
            onClick={() => setCategorySelector(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className={styles.productList}>
        {products.length === 0 ? (
          <SkeletonLoader count={6} />
        ) : (
          searchedProducts.map((product) => {
            return (
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
                  <button
                    className="buttonaddsmall"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fa-solid fa-cart-plus "></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </ul>
      {showOverlay && <OverlayPage />}
      {/* <Link to="/step2">Next Step</Link> */}
    </div>
  );
};

export default Step1;
