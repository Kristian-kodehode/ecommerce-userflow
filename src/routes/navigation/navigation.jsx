import React from "react";
import { Link } from "react-router-dom";
import Step1 from "../step1/step1";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/step2">Cart</Link>
      <h3>nav3</h3>
    </nav>
  );
};

export default Navigation;
