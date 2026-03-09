import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import TwoStepVerify from "./pages/TwoStepVerify";
import FinalSuccess from "./pages/FinalSuccess";
import SignIn from "./pages/SignIn";
import Explore from "./pages/Explore";
import Learn from "./pages/Learn";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/get-started" element={<SignUp />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verify-code" element={<TwoStepVerify />} />
        <Route path="/success" element={<FinalSuccess />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
