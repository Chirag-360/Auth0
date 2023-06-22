import React from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  //   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div>
      <ul>
        <li>
          <button onClick={handleClick}>Login</button>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/profile")}>Profile</button>
          {/* <button onClick={}>Login</button> */}
          {/* <a href="#" onClick={() => navigate("/login")}>
            Login
          </a> */}
          {/* <Link to="/login" Register Free></Link> */}
          {/* <Link to="/login">Login</Link> */}
        </li>
      </ul>
    </div>
  );
};
