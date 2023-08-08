import React from "react";
import { Link } from "react-router-dom";

const Step3ShippingAndPayment = () => {
  return (
    <div>
      <h1>Step 3: Add Shipping and Payment Details</h1>
      {/* Add your content for adding shipping and payment details here */}
      <Link to="/payment-success">Next Step</Link>
    </div>
  );
};

export default Step3ShippingAndPayment;
