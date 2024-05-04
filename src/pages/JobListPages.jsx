import React, { useEffect, useState } from "react";

import { Card } from "../components/Card";
import { JobListing } from "../components/JobListing";
import { Buttons } from "../components/common/Buttons";
import "../assets/css/JobListPages.css";
import { IconTextList } from "../api/IconTextList";
import { IconsCollection } from "../components/common/IconsCollection";
import MenuVertical from "../components/header/MenuVertical";
import { Header } from "../components/header/Header";

export const JobListPages = () => {
  return (
    <div className="position-absolute top-0 containerPages">
  
      {IconTextList.map((item, i) => (
        <div className="pb-2 mt-3 containerCard  rounded flex-column ">
          <div className="container d-flex  align-items-center  py-2">
            <p className="mx- mb-0 border fs-5 fw-bold">{item.title}</p>

            {item.botons &&
              item.botons.map((name) => (
                <Buttons
                  key={name.id}
                  text={name.boton}
                  color="#ffff"
                  tamanoTexto={12}
                />
              ))}
          </div>
          <div className=" container  d-flex  justify-content-arouter  align-items-center">
            {item.names &&
              item.names.map((name, j) => (
                <JobListing name={name.name} icon={name.icon} />
              ))}
            {item.icons && 
             item.icons.map((icon) =>(
              <div>
              <IconsCollection IconsButtons={icon.icon} />
            </div>
             )
            )}
          </div>
          <div className="containerImg">
            <img src={item.image} alt="icono" />
          </div>
        </div>
      ))}
    </div>
  );
};
