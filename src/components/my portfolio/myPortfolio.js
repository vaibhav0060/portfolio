import React, { Component } from "react";
import "./myPortfolio.css";
import back from "../../images/portfolioImg/back.png";
import todo from "../../images/portfolioImg/todo.png";
import todoMob from "../../images/portfolioImg/todoMob.png";
import clock from "../../images/portfolioImg/clock.png";

export default class MyPortfolio extends Component {
  render() {
    return (
      <>
        <p className="headings" id="portfolio">
          {" "}
          My Portfolio{" "}
        </p>
        <div className="portfolioMain">
          <div className="back portfolioImg">
            {/* <link to="https://vaibhav0060.github.io/projectfinal/"> */}
            {/* <img src={back} alt="back" /> */}
            {/* </link> */}
            <a href="https://vaibhav0060.github.io/projectfinal/">
              <img src={back} alt="back" />
            </a>
          </div>
          <div className="todo portfolioImg">
            <a href="https://vaibhav0060.github.io/todoapp/">
              <img src={todo} alt="todo" />
            </a>
          </div>
          <div className="todoMob portfolioImg">
            <a href="https://vaibhav0060.github.io/Todo-Mobile-2.0/">
              <img src={todoMob} alt="todoMob" />
            </a>
          </div>
          <div className="clock portfolioImg">
            <a href="https://vaibhav0060.github.io/clock-project/">
              <img src={clock} alt="back" />
            </a>
          </div>
          <div className="todoJs portfolioImg">
            <a href="https://vaibhav0060.github.io/Todo-Mobile-2.0/">
              <img src={todo} alt="back" />
            </a>
          </div>
          {/* <div className="back"></div> */}
        </div>
      </>
    );
  }
}
