import React from "react";
import "../../assets/css/IconsCollection.css";
// COMPONENTE  DE LOS ICONS REUTILIZABLES
export const IconsCollection = ({ IconsButtons }) => {
  return (
    <div className="container containerIcons d-flex gap-1 ">
      <span> {IconsButtons}</span>
    </div>
  );
};
