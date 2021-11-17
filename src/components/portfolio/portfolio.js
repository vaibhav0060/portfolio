import React, { Component } from "react";
import Nav from "../nav/nav";
import About from "../about/About";
import IntroImg from "../introImg/introImg";
import MyPortfolio from "../my portfolio/myPortfolio";
import Resume from "../Resume/Resume";
import Contact from "../contact/Contact";
import "./portfolio.css";
// import { BrowserRouter } from "react-ro";
import { BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
// NavLink
// import { Link } from "react-scroll";
export default class Portfolio extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route path="/"   /> */}

          <Nav />
          <IntroImg />
          {/* <Route path="/about" component={About} /> */}

          <About />
          {/* <Route path="/Portfolio" component={MyPortfolio} exact /> */}

          <MyPortfolio />
          {/* <Route path="/Resume" component={Resume} exact /> */}

          <Resume />
          {/* <Route path="/Contact" component={Contact} exact /> */}

          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}
