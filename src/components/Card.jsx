import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { BsCaretDownFill,  BsSearch } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import "../assets/css/Header.css";
export const Card = () => {
  const navLinks = ["area", "cargo", "salario", "Ubicación"];
  return (
    <div className="shadow position-relative z-index-0  p-3 nav-body d-flex justify-content-around">
      <div className="search-container">
        <form action="">
          <input
            type="text"
            placeholder="Buscamos por cargo, salario, ubicación o empres"
            className="search-input"
          />
        </form>
        <div className="search-icon">
        <BsSearch />
        </div>
      </div>
      <div className="">
        {navLinks.map((nav, index) => (
          <button className="rounded-button" key={index}>
            {nav}
            <BsCaretDownFill />
          </button>
        ))}
      </div>
    </div>
  );
};
NavLink;
