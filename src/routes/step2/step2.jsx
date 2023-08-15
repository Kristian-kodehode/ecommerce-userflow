import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const Step2 = () => {
  const { selectedItems, setSelectedItems } = useCart([]);

  const handleRemove = (productId) => {
    setSelectedItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  console.log(selectedItems);
  return (
    <div>
      <h1>Step 2: Item Added to Basket</h1>
      {/* Add your content for displaying the basket here */}
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
            <button onClick={() => handleRemove(item.id)}>remove item</button>
          </li>
        ))}
      </ul>

      <Link to="/step3">Next Step</Link>
    </div>
  );
};

export default Step2;
