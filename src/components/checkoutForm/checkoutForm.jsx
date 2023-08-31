import React, { useState } from "react";
import styles from "./checkoutForm.module.css";

const CheckoutForm = (props) => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("Hello");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className={styles.checkoutcontainer} onSubmit={handleSubmit}>
        <label>
          Select Card Type:
          <select
            className={styles.selectcard}
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            required
          >
            <option value="">-select card-</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </label>
        <label>
          Credit Card Number
          <input
            type="text"
            value={cardNumber}
            maxLength={16}
            placeholder="XXXX XXXX XXXX XXXX"
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <div className={styles.expirationandcvc}>
          <label>
            Expiration
            <input
              className={styles.datepicker}
              type="date"
              min={todayDate}
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              required
            />
          </label>
          <label>
            CVC
            <input
              type="text"
              maxLength={3}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
            />
          </label>
        </div>
        {/* <button  type="submit">Place Order</button> */}
      </form>
    </div>
  );
};

export default CheckoutForm;
