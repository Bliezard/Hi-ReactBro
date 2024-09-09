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
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status : {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" className="header-list">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="header-list">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="header-list">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="header-list">
              Grocery
            </Link>
          </li>
          <li className="px-4">
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
