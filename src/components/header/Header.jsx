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
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar1">
      <div className="container-fluid ">
        <a href="#"><img src="/logo-blue.png" alt="/img" /></a>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="" className="nav-link active" aria-current="page">Empleos</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Bootcamp</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Sobre nosotros</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Para profesionales
              </a>
              <ul class="dropdown-menu">
                <li><a className="dropdown-item">Inicio</a></li>
                <li><a className="dropdown-item">Empleos</a></li>
                <li><a className="dropdown-item">Cursos y retos</a></li>
                <li><a className="dropdown-item">Preguntas</a></li>
                <li><a className="dropdown-item">Profesores</a></li>
                <li><a className="dropdown-item">Bootcamp</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Para empresas
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Inicio</a></li>
                <li><a className="dropdown-item">Publicar empleo</a></li>
                <li><a className="dropdown-item">Nuestro proceso</a></li>
                <li><a className="dropdown-item">Precios</a></li>
                <li><a className="dropdown-item">Pruebas online</a></li>
                <li><a className="dropdown-item">Nómina</a></li>
                <li><a className="dropdown-item">Blog</a></li>
                <li><a className="dropdown-item">Comercial</a></li>
                <li><a className="dropdown-item">Calculadora de salario</a></li>
              </ul>
            </li>
          </ul> 
          
          <button className="btn btn-outline-secondary" type="button">
           <BsGlobe2 />
           Español
          </button>
          <button className="btn btn-outline-secondary" type="button">
           <IoNotifications />
          </button>
          <button className="btn btn-outline-secondary ">
           <MdAccountCircle className="" />
          </button>
        </div>
      </div>
    </nav>


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
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

      {/* AQUÍ SE  RENDERIZAN  LAS PAGINAS EN <Outlet/> */}
      <Outlet />
    </>
  );
};
