import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  console.log("header render again");
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <div className="flex">
      <div className="logo-container ">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li>Online Status : {OnlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="header-list">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="header-list">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header-list">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="header-list">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="header-list">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
