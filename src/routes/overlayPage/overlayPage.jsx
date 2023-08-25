import React from "react";
import { Link } from "react-router-dom";
import styles from "./overlayPage.module.css";
// import step2 from "../step2/step2";

const OverlayPage = () => {
  return (
    <div className={styles.pagecontainer}>
      <div>
        <h3>Item Successfully Added to Cart</h3>
      </div>

      <div className={styles.ctacontainer}>
        <Link to="/" className={styles.linkbuttons}>
          Continue shopping
        </Link>
        <span>or</span>
        <Link to="/step2" className={styles.linkbuttons}>
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default OverlayPage;
