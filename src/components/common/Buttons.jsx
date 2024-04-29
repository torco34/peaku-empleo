import React from "react";

export const Buttons = ({ text, color, title, tamanoTexto }) => {
  const buttonStyle = {
    backgroundColor: color,
    // Añade cualquier otro estilo deseado aquí
    padding: "0px 0px",
    border: "solid 1px #000",
    borderRadius: "25px",
    color: "#000",
    cursor: "pointer",
    width: "150px",
    height: "20px",
    fontSize: `${tamanoTexto}px`,
  };
  return (
    <>
      <div className="container d-flex gap-3 ">
        <h6 className="fs-5 fw-bold">{title}</h6>
        <button style={buttonStyle}>{text}</button>
      </div>
    </>
  );
};
