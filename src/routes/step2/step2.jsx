// import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const Step2 = () => {
  const { selectedItems, setSelectedItems } = useCart([]);

  const handleRemove = (productId) => {
    setSelectedItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const totalAmount = selectedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  console.log(selectedItems);
  return (
    <div>
      <h1>Step 2: Shoppingcart</h1>
      {/* List of cart items below in ul */}
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt="" />
            {item.title} - ${item.price}
            <button onClick={() => handleRemove(item.id)}>remove item</button>
          </li>
        ))}
      </ul>
      <h2>Total Amount: $ {totalAmount.toFixed(2)}</h2>

      <Link to="/step3">Pay in step3</Link>
    </div>
  );
};

export default Step2;
