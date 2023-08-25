import React from "react";
import { Link } from "react-router-dom";
// import step2 from "../step2/step2";

const OverlayPage = () => {
  return (
    <div>
      <div>
        <h3>Item Added to Cart</h3>
        <p> has been added to your cart.</p>
      </div>
      <Link to="/">Continue shopping</Link>
      <Link to="/step2">Go to Cart</Link>
    </div>
  );
};

export default OverlayPage;
