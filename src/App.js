import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import Browser from '@components/Browser';
import Footer from '@components/Footer';
import './app.css'

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page body">
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ScrollTop />
          <Footer />
      </div>
    );
  }
}

export default App;
