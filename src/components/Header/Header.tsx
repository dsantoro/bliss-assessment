import React from "react";
import "./header.css";
interface HeaderProps {
  // Define any props you want to pass to the component
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Bliss Challenge</h1>
      </div>
    </header>
  );
};

export default Header;
