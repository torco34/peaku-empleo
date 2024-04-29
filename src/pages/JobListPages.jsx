import React from "react";
import { ToggleMenuButton } from "../components/ToggleMenuButton";
import { Card } from "../components/Card";
import { LuMapPin } from "react-icons/lu";
import { JobListing } from "../components/JobListing";
import {
  BsBuildings,
  BsJournalArrowDown,
  BsCalendar3,
  BsPeople,
} from "react-icons/bs";

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Buttons } from "../components/common/Buttons";
import "../assets/css/JobListPages.css";
import imgIcon from "../assets/img/icon.png";
export const JobListPages = () => {
  const items = [
    
    { text: "Phidias", icon: <BsBuildings /> },
    { text: "Remoto", icon: <LuMapPin /> },
    { text: "$1.9m COP", icon: <FaRegMoneyBillAlt /> },
    { text: "1 vacante", icon: <BsPeople /> },
    { text: "un dia ago", icon: <BsCalendar3 /> },
    { text: <BsJournalArrowDown />, icon: <BsPeople /> },
  ];

    const items2 = [
     
      { text: "", icon: <BsBuildings /> },
      { text: "Remoto", icon: <LuMapPin /> },
      { text: "$1.9m COP", icon: <FaRegMoneyBillAlt /> },
      { text: "1 vacante", icon: <BsPeople /> },
      { text: "un dia ago", icon: <BsCalendar3 /> },
      { text: <BsJournalArrowDown />, icon: <BsPeople /> },
    ];
  // className = "position-absolute top-0 z-index-5";
  // shadow rounded
  return (
    <div className="position-absolute top-0 containerPages">
      <Card />
      <div className="p- mt-3 containerCard  border hove:shadow rounded flex-column ">
        <div className="p-2 ">
          <Buttons
            text="Acconthyn Analices"
            color="#ffff"
            tamanoTexto={12}
            title={"Aprendiz Sena Contador"}
          />
        </div>

        <div className=" mt- mb-4">
          <JobListing items={items} />
        </div>
        <div className="containerImg">
          <img src={imgIcon} alt="img-ico" />
        </div>
      </div>
      <div className="p- mt-3 containerCard  border hove:shadow rounded flex-column ">
        <div className="p-2 ">
          <Buttons
            text="Acconthyn Analices"
            color="#ffff"
            tamanoTexto={12}
            title={"Aprendiz Sena Contador"}
          />
        </div>

        <div className=" mt- mb-4">
          <JobListing items={items} />
        </div>
        <div className=" mt- mb-4">
          <JobListing items={items2} />
        </div>
        <div className="containerImg">
          <img src={imgIcon} alt="img-ico" />
        </div>
      </div>
      {/* jrfnf */}
      <div className="p- mt-3 containerCard  border hove:shadow rounded flex-column ">
        <div className="p-2 ">
          <Buttons
            text="Acconthyn Analices"
            color="#ffff"
            tamanoTexto={12}
            title={"Aprendiz Sena Contador"}
          />
        </div>

        <div className=" mt- mb-4">
          <JobListing items={items} />
        </div>
        <div className=" mt- mb-4">
          
        </div>
        <div className="containerImg">
          <img src={imgIcon} alt="img-ico" />
        </div>
      </div>
    </div>
  );
};
