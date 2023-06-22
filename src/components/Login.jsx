import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} /> <p>{user.name}</p>
        </div>
      )}
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
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
