import React from "react";
import "./style.scss";

const SocialIcons = (props, context) => {
  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/JohnLCastillo"
        style={{ color: "#607D8B" }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/17oDXxHwW6n4o5-y0apeSRkpjhvM4-J42/view?usp=sharing"
        style={{ color: "#607D8B" }}
      >
        <i className="far fa-file-code" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/john-luis-castillo/"
        style={{ color: "#607D8B" }}
      >
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
};

export default SocialIcons;
