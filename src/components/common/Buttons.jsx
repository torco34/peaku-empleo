import React from "react";
// BOTON REUTILIZABLE 
export const Buttons = ({ text, color, tamanoTexto }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: "0px 10px",
    border: "solid 1px #000",
    borderRadius: "25px",
    color: "#000",
    cursor: "pointer",
    width: "100%",
    height: "20px",
    fontSize: `${tamanoTexto}px`,
  };
  return (
    <>
      <div className="mx-1 ">
        <button style={buttonStyle}>{text}</button>
      </div>
    </>
  );
};
