import { useState } from "react";

import { Offcanvas, Button } from "react-bootstrap";
import { BsBriefcase, BsFileEarmarkCheck } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";

const options = [
  {
    name: "Disable backdrop",
    scroll: false,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  console.log(show);
  return (
    <>
      <Button
        variant=""
        onClick={toggleShow}
        className="position-absolute z-index-1 "
        style={{ left: "150px" }}
      >
      xx
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        style={{ width: "150px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="icon-list">
            <div className="icon-list-item mb-3">
              <BsBriefcase />
            </div>
            <div className="icon-list-item mb-3">
              <BsFileEarmarkCheck />
            </div>
            <div className="icon-list-item mb-3">
              <IoGameControllerOutline />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export const ToggleMenuButton = () => {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
};

// render(<ToggleMenuButton />);
