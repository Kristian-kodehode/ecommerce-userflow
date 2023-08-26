// import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import styles from "./step2.module.css";
import { useState } from "react";

const Step2 = () => {
  const { selectedCartItems, setSelectedCartItems } = useCart([]);
  const [counter, setCounter] = useState({});

  const handleRemoveItem = (productId) => {
    setSelectedCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  // const totalAmount = selectedCartItems.reduce(
  //   (total, item) => total + item.price,
  //   0
  // );

  const totalAmount = selectedCartItems.reduce((total, item) => {
    // Calculate the adjusted price based on the multiplier (default to 1 if no counter exists)
    const multiplier = counter[item.id] || 1;
    return total + item.price * multiplier;
  }, 0);

  const handleClearCart = () => {
    setSelectedCartItems([]);
  };

  const handleCounterChange = (productId, newCounter) => {
    setCounter((prevCounter) => ({
      ...prevCounter,
      [productId]: newCounter,
    }));
  };

  console.log(selectedCartItems);
  return (
    <div className={styles.pagecontainer}>
      <h1 className={styles.headercontainer}>Shoppingcart</h1>
      {/* List of cart items below in ul */}
      <ul>
        {selectedCartItems.map((item, index) => (
          <div key={index} className={styles.productcontainer}>
            <img className={styles.productimage} src={item.image} alt="" />
            <div className={styles.productinfo}>
              <h4>{item.title}</h4>

              <span className={styles.quantityandpricecontainer}>
                <span className={styles.quantitycontainer}>
                  <button
                    className={styles.buttonquantity}
                    onClick={() =>
                      handleCounterChange(item.id, (counter[item.id] || 1) - 1)
                    }
                  >
                    -
                  </button>
                  <span className={styles.quantitydisplay}>
                    {counter[item.id] || 1}
                  </span>{" "}
                  <button
                    className={styles.buttonquantity}
                    onClick={() =>
                      handleCounterChange(item.id, (counter[item.id] || 1) + 1)
                    }
                  >
                    +
                  </button>
                </span>

                <span>
                  <span>
                    $ {(item.price * (counter[item.id] || 1)).toFixed(2)}
                  </span>
                  <button
                    className={styles.buttonremove}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </span>
              </span>
            </div>
          </div>
        ))}
      </ul>
      <h2>Total Amount: $ {totalAmount.toFixed(2)}</h2>

      <Link to="/step3" className="hoverlink">
        <button className="buttonadd">
          {" "}
          Go to checkout
          {/* <i className="fa-solid fa-arrow-right displayhover"></i> */}
        </button>{" "}
      </Link>
      <button onClick={handleClearCart} className={styles.clearbutton}>
        Clear Cart
      </button>
    </div>
  );
};

export default Step2;
