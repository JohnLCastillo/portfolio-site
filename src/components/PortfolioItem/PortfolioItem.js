import React from "react";

import "./style";

const PortfolioItem = (props, context) => {
  if (props.render) return props.render;
  else
    return (
      <div
        className="portfolio-item"
        style={{ backgroundColor: "#607D8B", color: "#FFFFFF" }}
      >
        <div className="portfolio-item__title">Google</div>

        <div className="portfolio-item__desc">
          I didn't make it but it sure made me!
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links">
          <a src="#">GitHub</a>
          <a src="#">Live</a>
        </div>
      </div>
    );
};

export default PortfolioItem;
