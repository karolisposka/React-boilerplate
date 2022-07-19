import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Navigation from "./components/Navigation/Navigation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
