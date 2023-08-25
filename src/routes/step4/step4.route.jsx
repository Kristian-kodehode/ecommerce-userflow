import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./step4.module.css";

import Lottie from "lottie-react";
import animationData from "../../animations/animation_shipping2.json";

const Step4 = () => {
  const navigate = useNavigate();
  const redirectTime = 5000; // 5000 milliseconds (5 seconds)

  const [remainingTime, setRemainingTime] = useState(redirectTime);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, redirectTime);

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(0, prevTime - 1000)); // Decrease by 1 second
    }, 1000);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Step 4: Payment Successful!</h1>
      <p>Redirecting in {remainingTime / 1000} seconds...</p>
      <Lottie
        animationData={animationData}
        loop={false}
        className={styles.lottieanimation}
      />
      <Link to="/">Go back to Step 1</Link>
    </div>
  );
};

export default Step4;
