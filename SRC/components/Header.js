import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  // let btnName = "Login";
  console.log("header render again");
  const [btnNameReact, setbtnNameReact] = useState("Login");


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smocking-burger-with-lettuce-3624ld.png"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button 
            className="login-btn" 
            onClick={() => {
            btnNameReact === "Login" 
            ? setbtnNameReact("Logout")
            : setbtnNameReact("Login");
             
          }}
       >
          {btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  