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
    <>
      <h1 className={styles.headercontainer}>Shoppingcart</h1>
      <div className={styles.pagecontainer}>
        {/* List of cart items below in ul */}
        <div className={styles.productsection}>
          <ul>
            {selectedCartItems.map((item, index) => (
              <div key={index} className={styles.productcontainer}>
                <img className={styles.productimage} src={item.image} alt="" />
                <div className={styles.productinfo}>
                  <div className={styles.titleandprice}>
                    <h4 className={styles.itemtitle}>{item.title}</h4>
                    <h4>
                      $ {(item.price * (counter[item.id] || 1)).toFixed(2)}
                    </h4>
                  </div>

                  <span className={styles.quantityandpricecontainer}>
                    <div className={styles.quantityanddeletebutton}>
                      <span className={styles.quantitycontainer}>
                        <button
                          className={styles.buttonquantity}
                          onClick={() =>
                            handleCounterChange(
                              item.id,
                              (counter[item.id] || 1) - 1
                            )
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
                            handleCounterChange(
                              item.id,
                              (counter[item.id] || 1) + 1
                            )
                          }
                        >
                          +
                        </button>
                      </span>
                      <button
                        className={styles.buttonremove}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className={styles.paysection}>
          <div className={styles.totalamountcontainer}>
            <h4 className={styles.totalamount}>Total Amount: </h4>
            <h2 className={styles.totalamount}>$ {totalAmount.toFixed(2)}</h2>
          </div>
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
      </div>
    </>
  );
};

export default Step2;
