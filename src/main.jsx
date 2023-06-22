import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react"
import { Provider } from "react-redux";


import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer:{}
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store = {store}>
    <Auth0Provider
    domain="dev-qpadn0beiytc8j0w.us.auth0.com"
    clientId="1NerICLRAARsDjytSsUMw1CXDEf7sFdL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>,
)
