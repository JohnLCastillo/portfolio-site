import React, { Component } from "react";
import { toElement as scrollToElement } from "@utils/scroll";
import "./style.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <nav
        className="nav"
        ref={elem => {
          this.nav = elem;
        }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          color: "#607D8B"
        }}
      >
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid #607d8b;
            }
          `}
        </style>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={e => this.scrollToPage(".about-page")}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={e => this.scrollToPage(".portfolio-page")}
          >
            Portfolio
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
