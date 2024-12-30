// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure react-router-dom is installed
import { AuthProvider } from "./context/AuthContext"; // Correctly import AuthProvider
import Login from "./pages/Login"; // Adjust path if needed
import Register from "./pages/Register"; // Adjust path if needed
// import Home from "./pages/Home"; // Home component

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
