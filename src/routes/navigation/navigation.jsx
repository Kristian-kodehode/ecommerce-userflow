// import React from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <Link className={`${styles.navlinks} ${styles.navlinksfadeup}`} to="/">
        Home
      </Link>
      <Link
        className={`${styles.navlinks} ${styles.navlinksfadeup}`}
        to="/step2"
      >
        Cart
      </Link>
      <Link
        className={`${styles.navlinks} ${styles.navlinksfadeup}`}
        to="/aboutproject"
      >
        About
      </Link>
    </nav>
  );
};

export default Navigation;
