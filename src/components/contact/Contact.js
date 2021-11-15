import React, { Component } from "react";
import "./contact.css";
import call from "../../images/contactImg/call.png";
import loc from "../../images/contactImg/loc.png";
import msg from "../../images/contactImg/msg.png";

export default class Contact extends Component {
  message = (ev) => {
    // ev.preventDefault();
    // alert("thanks for connecting with me , i will contact you soon ");
  };
  render() {
    return (
      <div>
        <p className="contactHead">Contact Me</p>
        <div className="contact">
          <div className="details">
            <div className="connectText">
              <p className="contactDHead">Let's connect ,</p>
              <div className="contactIcon">
                <div className="call">
                  <img src={msg} alt="msg" />
                  <p className="contactDetails">chaudharivaibhav60@gmail.com</p>
                </div>
                <div className="call">
                  <img src={call} alt="call" />
                  <p className="contactDetails"> +91 96656-70935 </p>
                </div>
                <div className="call">
                  <img src={loc} alt="loc" />
                  <p className="contactDetails">
                    A/p Sakari ,Bhusawal Dist- Jalgaon ,Maharastra.{" "}
                  </p>
                </div>
              </div>
              <div className="contactIcon"></div>
              <div className="contactIcon"></div>
            </div>
          </div>
          <div className="form">
            <div className="formDetails">
              <p className="formHead">Send me a message</p>
              <form>
                <div>
                  {" "}
                  First & Last Name <span className="redd">*</span>
                </div>
                <input type="text" id="name" required />
                <div>
                  {" "}
                  Phone number <span className="redd">*</span>
                </div>
                <input type="text" id="department" required />
                <div>
                  {" "}
                  Email address <span className="redd">*</span>
                </div>
                <input type="email" id="rating" required />
                <div>
                  {" "}
                  Message <span className="redd">*</span>{" "}
                </div>
                <textarea name="" id="" cols="30" rows="4"></textarea>
                <br />
                <br />
                <button value="Submit" id="message" onClick={this.message}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
