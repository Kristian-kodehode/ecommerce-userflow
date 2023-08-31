// import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import styles from "./navigation.module.css";

const Navigation = () => {
  const { selectedCartItems, setSelectedCartItems } = useCart([]);

  return (
    <nav>
      <div className={styles.linkcontainer}>
        <Link className={`${styles.navlinks} ${styles.navlinksfadeup}`} to="/">
          <i className="fa-solid fa-shop"></i> Shop
        </Link>
        <Link
          className={`${styles.navlinks} ${styles.navlinksfadeup}`}
          to="/step2"
        >
          {" "}
          <i className="fa-solid fa-cart-shopping cartnavicon"></i> Cart{" "}
          {selectedCartItems.length > 0 ? `(${selectedCartItems.length})` : ""}
        </Link>
        <Link
          className={`${styles.navlinks} ${styles.navlinksfadeup}`}
          to="/aboutproject"
        >
          {" "}
          <i className="fa-solid fa-frog"></i> About
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
