import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export const JobListing = ({ items }) => {
  return (
    <>
      <div className=" " style={{ width: "100%" }}>
        <Container>
          <Row>
            {items.map((item, index) => (
              <Col key={index}>
                <span className="p-1">{item.icon}</span>
                <span className=""> {item.text}</span>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
