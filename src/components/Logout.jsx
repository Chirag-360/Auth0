import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Logout</h1>
      <button>logout</button>
    </div>
  );
};
