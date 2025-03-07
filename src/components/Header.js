import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">
            <shortsIcon /> Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-4">
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link className="header-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="p-4">
            <Link className="header-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="p-4">
            <Link to="/cart"> Cart - {cartItems.length} </Link>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
