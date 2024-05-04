import { Container, Navbar } from "react-bootstrap";
import { Card } from "../Card";
import { ToggleMenuButton } from "../ToggleMenuButton";
import { Outlet, NavLink } from "react-router-dom";
import MenuVertical from "./MenuVertical";
import { useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
export const Header = ({ navbarItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Navbar className="header-navbar">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="d-flex justify-content-end  ">
            <ul className=" navbar-nav  mb-2 mb-lg-0">
              {navbarItems.map((nav) => (
                <li className="nav-item" key={nav.id}>
                 <NavLink  to={nav.route} className="nav-link">
                    <span className="mx-2 text-dark">
                      {nav.name} {nav.icon}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <button>
              <BsGlobe2 />
              Espanol
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MenuVertical />

      {/* AQUÍ SE  RENDERIZAN  LAS PAGINAS EN <Outlet/> */}
      <Outlet />
    </>
  );
};
