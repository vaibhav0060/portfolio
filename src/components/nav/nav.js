import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-scroll";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="name" id="home">
          Vaibhav Chaudhari
        </div>
        <div className="buttons">
          <ul>
            {/* <li>
              <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
              </a>
            </li> */}
            {/* <li>Home</li>
            <li>About</li>
            <li onClick="#portfolio">Portfolio</li>
            <li>Resume</li>
            <li>Contact</li> */}
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////
// import React, { Component } from "react";
// import "./nav.css";
// export default class Nav extends Component {
//   myFunction = () => {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "buttons") {
//       x.className += " responsive";
//     } else {
//       x.className = "buttons";
//     }
//   };
//   render() {
//     return (
//       <div className="nav">
//         <div className="name">Vaibhav Chaudhari</div>
//         <div className="buttons" id="myTopnav">
//           <ul>
//             <li>
//               <a
//                 // href="./"
//                 href="javascript:void(0);"
//                 class="icon"
//                 onclick={this.myFunction}
//               >
//                 <i class="fa fa-bars"></i>
//               </a>
//             </li>
//             <li>Home</li>
//             <li>About</li>
//             <li onClick="#portfolio">Portfolio</li>
//             <li>Resume</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
