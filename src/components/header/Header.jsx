
import { Outlet, Link } from "react-router-dom";
import MenuVertical from "./MenuVertical";
import React, { useState, useEffect } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import "../../assets/css/Header.css";
export const Header = ({ navbarItems }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(10);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowNav(scrollY > 0); 
  }, [scrollY]);
  return (
    <>
         <nav className="container-fluid mx-auto gap-1 w-full hidden lg:flex  justify-center items-center mb-4  ">
        <a href="#">
        <Link to="/" className="nav-link active" aria-current="page"> 
        <img src="/logo-blue.png" alt="/img"className="mx-2" />
        </Link>
        
        </a>
        <div
          className="collaps sm:hidden  navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="flex gap-4 my-3">
            <li className="nav-item  " >
            <Link to="/empleo" className="nav-link active" aria-current="page">Empleos</Link>
           
            </li>
            <li className="nav-item">
            <Link to="/boot" className="nav-link active" aria-current="page"> Bootcamp</Link>
            
            </li>
            <li className="nav-item">
              <a href="" class="nav text-slate-500">
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="navProfesionales">
                <a
                  className="nav text-slate-500 dropdown-toggle"
                  href="#"
                  id="navProfesionales"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Para profesionales
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navProfesionales"
                >
                  <ul className="lista">
                    <a>Inicio</a>
                    <a>Empleos</a>
                    <a>Cursos y retos</a>
                    <a>Preguntas</a>
                    <a>Profesores</a>
                    <a>Bootcamp</a>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav text-slate-500 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Para empresas
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">Inicio</a>
                </li>
                <li>
                  <a className="dropdown-item">Publicar empleo</a>
                </li>
                <li>
                  <a className="dropdown-item">Nuestro proceso</a>
                </li>
                <li>
                  <a className="dropdown-item">Precios</a>
                </li>
                <li>
                  <a className="dropdown-item">Pruebas online</a>
                </li>
                <li>
                  <a className="dropdown-item">Nómina</a>
                </li>
                <li>
                  <a className="dropdown-item">Blog</a>
                </li>
                <li>
                  <a className="dropdown-item">Comercial</a>
                </li>
                <li>
                  <a className="dropdown-item">Calculadora de salario</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      <div className="flex  containerButton ">
      <button className="btn  btn-outline-secondary">
          <BsGlobe2 />
        <p className="">  Español</p>
        </button>
        <button className="btn btn-outline-secondary" type="button">
          <IoNotifications className="fs-4" />
        </button>
        <button className="text-center">
          <MdAccountCircle className="fs-4 " />
        </button>
      </div>
      </nav>

      <div
        className={` bg-blue-500 fixe ${
          showNav ? "top-0" : ""
        } transition-transform duration-100`}
        id="containerBlue"
      >
        <div className="container grid md:grid-cols-1 sm:grid-cols-1 ">
          <div className="row ">
            <div className="col-4 grid sm:grid-cols-1">
              <div>
                <input
                  className="form-control  mt-3 search-input"
                  type="text"
                  name="buscarCargo"
                  id=""
                  placeholder=" Busca por cargo, salario, ubicación o empresa"
                />
              </div>
            </div>
            <div className="col-7  d-flex justify-content-end align-items-center grid md:grid-cols-1 grid ms:grid-cols-1 dropdown mt-3">
              <button
                className=" btn-blue-500 text-white btn-blue dropdown-toggle mx-1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Área
              </button>
              <button
                className="btn-blue-500 text-white btn-blue dropdown-toggle mx-1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cargo
              </button>
              <button
                className="btn-blue-500 text-white btn-blue dropdown-toggle mx-1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Salario
              </button>
              <button
                className="btn-blue-500 text-white btn-blue dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ubicación
              </button>
            </div>
          </div>
        </div>
      </div>
      <MenuVertical />

      {/* AQUÍ SE  RENDERIZAN  LAS PAGINAS EN <Outlet/> */}
      <Outlet />
    </>
  );
};
