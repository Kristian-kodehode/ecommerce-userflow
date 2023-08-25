import React from "react";
import { useCart } from "../../CartContext";
import { Link } from "react-router-dom";

const Step3 = () => {
  const { selectedItems, setSelectedItems } = useCart([]);

  const handleCompleteCart = () => {
    setSelectedItems([]);
  };

  return (
    <div>
      <h1>Step 3: Add Shipping and Payment Details</h1>
      {/* Add your content for adding shipping and payment details here */}
      <Link to="/step4" onClick={handleCompleteCart}>
        Complete Purchase
      </Link>
    </div>
  );
};

export default Step3;
