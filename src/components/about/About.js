import React, { Component } from "react";
import "./about.css";
// import aboutImg from "../../images/web.png";
import html from "../../images/aboutImg/HTML 5.png";
import css3 from "../../images/aboutImg/css3.png";
import hello from "../../images/aboutImg/hello.svg";
import js from "../../images/aboutImg/js.png";
import netlify from "../../images/aboutImg/netlify.png";
import react from "../../images/aboutImg/react.png";
import github from "../../images/aboutImg/github.png";
// import about from "../../images/ab.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="aboutBox">
        <div className="aboutImg">
          {/* <img src={aboutImg} alt="aboutimg" /> */}
          <img src={hello} alt="aboutimg" />

          {/* <img src={about} alt="aboutimg" /> */}
        </div>
        <div className="aboutText">
          <p className="aboutHead" id="about">About Me</p>
          <p>
            I'm a web designer & front-end developer . I'm interested in all
            kinds of visual communication, but my major focus is on designing
            web, mobile & tablet interfaces. I also have skills in other fields
            like branding, icon design or web development.
          </p>
          <p>
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. When I'm not pushing pixels, you'll find me
            Playing oudoor games, Traking or working out in the park.
          </p>
          <div className="liabries">
            <p>Languages/Library/Technology</p>
            <div className="icons">
              <img src={html} alt="html" />
              <img src={css3} alt="css3" />
              <img src={js} alt="js" />
              <img src={netlify} alt="netlify" />
              <img src={react} alt="react" />
              <img src={github} alt="github" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
