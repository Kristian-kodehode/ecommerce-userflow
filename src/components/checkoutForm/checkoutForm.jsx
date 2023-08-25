import React, { useState } from "react";
import styles from "./checkoutForm.module.css";

const CheckoutForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [country, setCountry] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to handle form submission,
    // such as sending the form data to a server.
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form className={styles.checkoutcontainer} onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          {/* <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          /> */}
          <input
            placeholder="Street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <input
            placeholder="Streetnumber"
            type="text"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            required
          />
          <input
            placeholder="Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Card Type:
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </label>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        {/* <button  type="submit">Place Order</button> */}
      </form>
    </div>
  );
};

export default CheckoutForm;
