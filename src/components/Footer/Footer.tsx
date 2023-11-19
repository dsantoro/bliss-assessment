import React from "react";
import "./footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://www.github.com/dsantoro"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Danylo Santoro
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
