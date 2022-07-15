import React from "react";
import { Link } from "react-router-dom";

const ErrorHandler = () => {
  return (
    <div
      style={{
        fontSize: "45px",
        color: "red",
        textAlign: "center",
      }}
    >
      Wrong Route Go Back To Home Page{" "}
      <Link style={{ textDecoration: "underline", color: "blue" }} to="/">
        Home
      </Link>
    </div>
  );
};

export default ErrorHandler;
