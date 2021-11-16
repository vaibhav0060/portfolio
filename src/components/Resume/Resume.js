import React, { Component } from "react";
import "./Resume.css";
import resume from "../../images/aboutImg/resume.svg";
export default class Resume extends Component {
  render() {
    return (
      <div>
        <div className="resumeMain">
          <p className="heading" id="resume">
            Resume
          </p>
          <div className="resume">
            <div className="first">
              <p className="experience">Work Experience</p>
              <hr />
              <div className="tranings">
                <div className="detail">
                  <p className="training">
                    <li className="color"></li> Web Developement Training
                  </p>
                  <span className="year">2021</span>
                  {/* <p className="company_collage">Prepbytes</p> */}
                </div>

                <div className="pic">
                  <img src={resume} alt="resume" />
                </div>
                <p className="company_collage"> from Prepbytes .</p>

                {/* <li className="training"> Web Developement Training</li>
                <span className="year">2021</span>
                <p className="company_collage">Prepbytes</p> */}
              </div>
            </div>
            <div className="second">
              <p className="experience">Education</p>
              <hr />
              <div className="detail">
                <p className="training">
                  <li className="color"></li> Savitribai Phule Pune University
                  {/* Bachelor of Engineering */}
                </p>
                <span className="year">2018 - 2021</span>
              </div>
              <p className="collage"> Bachelors in Electical Engineering</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
