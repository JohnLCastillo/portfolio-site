import React from "react";
import SocialIcons from "@components/SocialIcons";
import Nav from "@components/Nav";
import ScrollToNext from "@components/ScrollToNext";

import "./style.scss";

const LandingPage = (props, context) => {
  return (
    <div className="landing-page">
      <Nav />
      <main style={{ color: "#607D8B" }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm John!</div>
          <div className="tagline">Full Stack Dev | NBA Enthusiast | Gamer</div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
