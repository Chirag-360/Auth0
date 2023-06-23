import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import apiReducer from "./features/apidata.js";

import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import dotenv from "dotenv";
// dotenv.config();

export const store = configureStore({
  reducer: {
    profile: apiReducer,
  },
});

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-qpadn0beiytc8j0w.us.auth0.com"
        clientId="1NerICLRAARsDjytSsUMw1CXDEf7sFdL"
        authorizationParams={{
          redirect_uri: "http://localhost:5173/login",
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
