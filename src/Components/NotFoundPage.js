import React from "react";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for is not here.</p>

      <button className="global-btn-bg font-face-Regular" onClick={goToHome}>
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
