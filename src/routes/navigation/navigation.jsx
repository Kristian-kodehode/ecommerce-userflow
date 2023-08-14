import React from "react";
import { Link } from "react-router-dom";
import("./navigation.module.css");

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/step2">Cart</Link>
      <Link to="/aboutproject">About project</Link>
    </nav>
  );
};

export default Navigation;
