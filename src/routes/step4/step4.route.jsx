import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  const redirectTime = 5000; // 5000 milliseconds (5 seconds)

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, redirectTime);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div>
      <h1>Step 4: Payment Successful!</h1>
      <p>Redirecting to Step 1...</p>
      <Link to="/">Go back to Step 1</Link>
    </div>
  );
};

export default Step4;
