import React, { useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileChange } from "../features/apidata";

function Login() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        logout({
          logoutParams: { returnTo: "http://localhost:5173/login" },
        });
        navigate("/login");
      }, 6000);
    }
  }, [isAuthenticated]);
  // console.log(usssser);s
  return (
    <>
      <h1>LOGIN Page</h1>
      {/* {user} */}
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} /> <p>{user.name}</p>
          <button
            onClick={() => {
              dispatch(profileChange(user));
            }}
          >
            Send Data
          </button>
        </div>
      )}
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({
              logoutParams: { returnTo: "http://localhost:5173/login" },
            })
          }
        >
          logout
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>login</button>
      )}
    </>
  );
}

export default Login;
