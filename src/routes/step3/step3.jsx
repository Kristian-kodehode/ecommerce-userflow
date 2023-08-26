import React from "react";
import { useCart } from "../../CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/checkoutForm";
import styles from "./step3.module.css";

const Step3 = () => {
  const { selectedCartItems, setSelectedCartItems } = useCart([]);

  const handleCompleteCart = () => {
    setSelectedCartItems([]);
  };

  return (
    <div className={styles.step3container}>
      <h1>Step 3: Add Shipping and Payment Details</h1>
      <CheckoutForm />
      {/* Add your content for adding shipping and payment details here */}
      <Link to="/step4" onClick={handleCompleteCart} className="buttonadd">
        Complete Purchase
      </Link>
    </div>
  );
};

export default Step3;
