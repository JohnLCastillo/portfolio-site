import React from "react";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";

const AboutPage = (props, context) => {
  return (
    <div className="about-page">
      <style jsx="true">
        {`
          .highlight {
            background-color: #dfe6e9;
          }
          ::selection {
            background-color: #dfe6e9;
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: "#607D8B" }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: "rgb(33, 33, 33)" }}>
            <p>
              I love everything about <span className="highlight">the web</span> and
              technology.
            </p>
            <p>
              I truly enjoy working on complex problems because the payoff of
              finally finding the <span className="highlight"> solution</span>  after
              hours of hardwork makes me grow as a dev. During my time off, I like to           learn about interesting new developments in tech,
              watching CP3 win a ring, and playing some video games.Tech
              is constantly <span className="highlight">evolving</span> and I
              want to be present every step of the way.
            </p>
            <p>
              My favorite tools thus far are React-Redux, Node.js, and Vue.js. I
              can't wait to expand my knowledge even further!
            </p>
            <p className="text-emoji" style={{ color: "#607D8B" }}>
              ( •_•)>⌐■-■ / (⌐■_■)
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

export default AboutPage;
