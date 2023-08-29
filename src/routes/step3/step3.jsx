import React from "react";
import { useCart } from "../../CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/checkoutForm";
import styles from "./step3.module.css";
import saferpaylogo from "../../../public/images/saferpaylogo.svg";

const Step3 = () => {
  const { selectedCartItems, setSelectedCartItems } = useCart([]);

  const handleCompleteCart = () => {
    setSelectedCartItems([]);
  };

  return (
    <div className={styles.step3container}>
      <h1 className={styles.stepheading}>Checkout</h1>
      {/* <h1>Step 3: Add Shipping and Payment Details</h1> */}

      <CheckoutForm />
      <div className={styles.ctacontainer}>
        <div className={styles.newsletter}>
          <input
            type="checkbox"
            // checked="checked"
            name="newsletter"
            className={styles.checkmark}
            id=""
          />
          <label htmlFor="newsletter">Sign up for our newsletter</label>
        </div>
        <Link
          to="/step4"
          onClick={handleCompleteCart}
          className={styles.buttoncomplete}
        >
          Complete Purchase
        </Link>
        {/* <Link>-Terms and Conditions-</Link> */}
      </div>

      <img src={saferpaylogo} className={styles.imagelogo} alt="" />
    </div>
  );
};

export default Step3;
