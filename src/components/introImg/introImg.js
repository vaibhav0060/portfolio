import React, { Component } from "react";
// import web.png from "../images";
import "./introImg.css";
import { Link } from "react-scroll";
export default class IntroImg extends Component {
  render() {
    return (
      <div className="introImg">
        <div className="intro">
          <p className="nameInIntro">Hi, I am Vaibhav Chaudhari</p>
          <p className="developer">A Front-end Developer</p>
          <p className="lastPara">Get ready to turn ideas into reality</p>
          <div className="buttonsInIntro">
            <button className="hireMe">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hire Me
              </Link>
            </button>
            <button className="getResume">
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Get Resume
              </Link>
            </button>
          </div>
        </div>
        <div className="img">
          {/* i xvx{" "} */}
          {/* <img src={require("../images/web.png")} alt="img logo" /> */}
        </div>
      </div>
    );
  }
}
// Playing oudoor games, Traking or working out in the park.
//
