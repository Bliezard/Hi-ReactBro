import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  // console.log("header render again");
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);


//subscribing to the store using a Selector

const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    // console.log("useEffect called");
  });

  return (
    <div className="flex justify-between bg-red-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status : {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4 font-bold text-xl">
          <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          
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
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
