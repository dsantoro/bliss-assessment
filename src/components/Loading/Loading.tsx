import React from "react";
import "./loading.css";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="loading">
      <div className="loading__text">
        Checking server's health 🩺 and loading your experience...🙀🙀🙀
      </div>
    </div>
  );
};

export default Loading;
