// import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import styles from "./step2.module.css";

const Step2 = () => {
  const { selectedItems, setSelectedItems } = useCart([]);

  const handleRemoveItem = (productId) => {
    setSelectedItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const totalAmount = selectedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleClearCart = () => {
    setSelectedItems([]);
  };

  console.log(selectedItems);
  return (
    <div className={styles.pagecontainer}>
      <h1>Shoppingcart</h1>
      {/* List of cart items below in ul */}
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt="" />
            {item.title} - ${item.price}
            <button
              className="buttonadd secondary"
              onClick={() => handleRemoveItem(item.id)}
            >
              <i className="fa-solid fa-trash-can"></i> Remove item
            </button>
          </li>
        ))}
      </ul>
      <h2>Total Amount: $ {totalAmount.toFixed(2)}</h2>

      <Link to="/step3" className="hoverlink">
        <button className="buttonadd">
          {" "}
          Go to checkout
          <i className="fa-solid fa-arrow-right displayhover"></i>
        </button>{" "}
      </Link>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Step2;
