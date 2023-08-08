import React from "react";
import { Link } from "react-router-dom";

const Step1 = () => {
  return (
    <div>
      <h1>Step 1: Select Item</h1>
      {/* Add your content for selecting an item here */}
      <Link to="/step2">Next Step</Link>
    </div>
  );
};

export default Step1;
