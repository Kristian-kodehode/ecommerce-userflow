import React from "react";
import { Link } from "react-router-dom";

const Step2 = () => {
  return (
    <div>
      <h1>Step 2: Item Added to Basket</h1>
      {/* Add your content for displaying the basket here */}
      <Link to="/shipping-and-payment">Next Step</Link>
    </div>
  );
};

export default Step2;
