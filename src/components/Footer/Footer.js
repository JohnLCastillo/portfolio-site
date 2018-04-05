import React from "react";
import "./style";

const Footer = (props, context) => {
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: "#607D8B" }}>
          Crafted with
          <span role="img" aria-label="heart">
            ❤️
          </span>
          
          by{" "}
          <a
            href="https://github.com/JohnLCastillo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#607D8B" }}
          >
            John
          </a>{" "}
          <span role="img" aria-label="heart">
            🎮
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
