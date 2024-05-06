import React, { useState } from "react";
import {
  BsBriefcase,
  BsFileEarmarkCheck,
  BsBraces,
  BsChatText,
  BsFileEarmarkPerson,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import { IoGameControllerOutline, IoDiamond } from "react-icons/io5";
import "../../assets/css/MenuVertical.css";

const iconList = [
  { icon: <BsBriefcase />, text: "Empleo" },
  { icon: <BsFileEarmarkCheck />, text: "Postulaciones" },
  { icon: <IoGameControllerOutline />, text: "Codex" },
  { icon: <BsChatText />, text: "preguntas" },
  { icon: <BsBraces />, text: "Bootcamp" },
  { icon: <IoDiamond />, text: "Premios" },
  { icon: <BsFileEarmarkPerson />, text: "Tu CV" },
];

const MenuVertical = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu ? (
        <div className="d-flex -mt-4 border-r-4 collaps containerMenu  bg-body-tertiary fixed h-100 z-10 ">
          <ul className="nav  flex-column">
            {iconList.map((item, index) => (
              <div
                className="icon-list-item d-flex flex-column align-items-center"
                key={index}
              >
                <span className="ms-2 fs-3"> {item.icon}</span>
                <span className="ms-2 texto">{item.text}</span>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className="d-flex flex-column -mt-2 border-r-4 collaps  bg-body-tertiary fixed h-100 z-10 containerMenu2">
          {iconList.map((item, index) => (
            <div
              className="icon-list-item d-flex mt-3 ms-2 flex-column align-items-center"
              key={index}
            >
              <span className="ms-2 fs-3"> {item.icon}</span>
              <span className="ms-3 texto fs-6">{item.text}</span>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleShowMenu}
        className="btn-unstyle fixed top-1/4 h-100 left-12 z-10"
      >
        {showMenu ? (
          <BsArrowRightCircleFill className="text-primary fs-2" />
        ) : (
          <BsArrowLeftCircleFill className="text-primary fs-2" />
        )}
      </button>
    </>
  );
};

export default MenuVertical;
