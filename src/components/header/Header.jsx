import { Container, Navbar } from "react-bootstrap";
import { Card } from "../Card";
import { ToggleMenuButton } from "../ToggleMenuButton";
import { Outlet, NavLink } from "react-router-dom";
import MenuVertical from "./MenuVertical";
import { useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { RiInputField } from "react-icons/ri";
import "../../assets/css/Header.css"

export const Header = ({ navbarItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Navbar className="header-navbar navbar navbar-expand-lg bg-body-tertiary nav-body">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="collapse navbar-collapse d-flex justify-content-end">
            <ul className=" navbar-nav p-2 mb-2 mb-lg-0">
              {navbarItems.map((nav, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    exact
                    to={nav.route}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span className="mx-2 text-dark">
                      {nav.name} {nav.icon}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <button >
              <BsGlobe2 className="m-2" />
              Español
            </button>
            <button >
              <IoNotifications />              
            </button>
            <button >
              <MdAccountCircle />              
            </button>          
                      
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="bg-primary container-fluid navbar-expand-lg" id="containerBlue">
        <div className="row">
          <div className="col">
            <div>
            <input className="form-control mb-3 mt-3 search-input" type="text" name="buscarCargo" id=""
             placeholder=" Busca por cargo, salario, ubicación o empresa"/> 
            </div>
          </div>
          <div className="col d-flex justify-content-end dropdown m-b3">
            <button className="btn btn-primary btn-blue area dropdown-toggle botones me-1" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Área</button>
            <button className="btn btn-primary btn-blue dropdown-toggle me-1" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Cargo</button>
            <button className="btn btn-primary btn-blue dropdown-toggle me-1" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Salario</button>
            <button className="btn btn-primary btn-blue dropdown-toggle me-5" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Ubicación</button>
          </div>
        </div>
      </div>
      <MenuVertical />

      {/* AQUÍ SE  RENDERIZAN  LAS PAGINAS EN <Outlet/> */}
      <Outlet />
    </>
  );
};
