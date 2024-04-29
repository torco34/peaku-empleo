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
  { icon: <BsFileEarmarkCheck />, text: "Opción 2" },
  { icon: <IoGameControllerOutline />, text: "Opción 3" },
  { icon: <BsChatText />, text: "Opción 4" },
  { icon: <BsBraces />, text: "Opción 5" },
  { icon: <IoDiamond />, text: "Opción 6" },
  { icon: <BsFileEarmarkPerson />, text: "Opción 7" },
];

const MenuVertical = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {showMenu ? (
        <div className="d-flex flex-column border-end align-items-center bg-white containerMenu">
          {iconList.map((item, index) => (
            <div
              className="icon-list-item d-flex flex-column align-items-center bg"
              key={index}
            >
              <span className="ms-2 fs-3"> {item.icon}</span>
              <span className="ms-2 texto">{item.text}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-column  border-end bg-white containerMenu2">
          {iconList.map((item, index) => (
            <div
              className="icon-list-item d-flex mt-3 ms-2 align-items-center bg "
              key={index}
            >
              <span className="ms-2 fs-3"> {item.icon}</span>
              <span className="ms-3 texto fs-6">{item.text}</span>
            </div>
          ))}
        </div>
      )}

      <button onClick={handleShowMenu} className="btn-unstyled">
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
