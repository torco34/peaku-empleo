import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsJournalArrowDown, BsBagFill } from "react-icons/bs";

export const JobListing = ({ icon, name }) => {
  return (
    <>
      <div className="container mx-auto gap-1 w-full hidden lg:flex  justify-center items-center mb-4">
        <span className="">{icon}</span>
        <span className="">{name}</span>
      </div>
    </>
  );
};
