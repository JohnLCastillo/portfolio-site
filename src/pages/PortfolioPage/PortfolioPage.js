import React from "react";
import PortfolioItem from "@components/PortfolioItem";
import ScrollToPrevious from "@components/ScrollToPrevious";
import portfolioItems from "./portfolio-items";

import "./style.scss";

const PortfolioPage = (props, context) => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1 style={{ color: "#607D8B" }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: #607d8b;
                color: #ffffff;
              }
              .portfolio-item a {
                color: #ffffff;
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid #ffffff;
              }
            `}
          </style>
          {/* <PortfolioItem /> */}
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

export default PortfolioPage;
