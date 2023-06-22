import React from "react";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



function App() {
  const client = new QueryClient();
  return (
    <>  

      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<h1>Page Not Exists</h1>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
