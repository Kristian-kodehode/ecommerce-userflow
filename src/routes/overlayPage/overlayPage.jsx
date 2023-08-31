// import React from "react";
import { Link } from "react-router-dom";
import styles from "./overlayPage.module.css";

import Lottie from "lottie-react";

import animationData from "../../animations/animation_checkmark.json";

const OverlayPage = () => {
  return (
    <div className={styles.pagecontainer}>
      <div>
        <h3>Item Successfully Added to Cart</h3>
      </div>
      <Lottie
        animationData={animationData}
        loop={false}
        className={styles.lottieanimation}
      />
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
