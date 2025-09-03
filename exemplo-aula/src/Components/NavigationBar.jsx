import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const NavigationBar = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/about"}>About</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Rota inexistente</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavigationBar;
