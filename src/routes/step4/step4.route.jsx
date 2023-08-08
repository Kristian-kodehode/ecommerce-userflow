import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Step4PaymentSuccess = () => {
  const history = useHistory();
  const redirectTime = 5000; // 5000 milliseconds (5 seconds)

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      history.push("/select-item");
    }, redirectTime);

    return () => clearTimeout(redirectTimeout);
  }, [history]);

  return (
    <div>
      <h1>Step 4: Payment Successful!</h1>
      <p>Redirecting to Step 1...</p>
      {/* Optionally, you can provide a link to manually go back to Step 1 */}
      <Link to="/select-item">Go back to Step 1</Link>
    </div>
  );
};

export default Step4PaymentSuccess;
