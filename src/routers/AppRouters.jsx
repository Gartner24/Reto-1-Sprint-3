import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBars from "../components/NavBars";
import Home from "../containers/Home";
import { GlobalStyle } from "../styles/layout/GlobalStyles";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
