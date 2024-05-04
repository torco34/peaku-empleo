import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/JobListing.css"

export const JobListing = ({ name, icon }) => {
  return (
    <>
      <div className="containerText">
    
          <Row>
            <Col className="d-flex align-items-center my-2">
            <span className="">{icon}</span>
              <span className="textSize">{name}</span>
            </Col>
          </Row>
      

      </div>
    </>
  );
};
