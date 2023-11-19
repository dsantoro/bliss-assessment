import React from "react";
import image from "../../assets/sad-cat.gif";
import "./error.css";

interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
  return (
    <div className="error">
      <img src={image} alt="Something went wrong, try again!" />
      <p>Something went wrong, try again!</p>
    </div>
  );
};

export default Error;
