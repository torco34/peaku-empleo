import React from "react";
import "../../assets/css/IconsCollection.css";
// COMPONENTE  DE LOS ICONS REUTILIZABLES
export const IconsCollection = ({ IconsButtons }) => {
  return (
    <div className="container mx-auto  w-full hidden lg:flex rounded  justify-center items-center mb-4  border border-dark">
      <span className="block   flex justify-center gap-1 items-center">
        {IconsButtons}
      </span>
    </div>
  );
};
