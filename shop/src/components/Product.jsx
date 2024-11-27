import React, { useState } from "react";
import data from "../data";

import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";

export default function Product() {
  return (
    <>
      {data.map((item) => (
        <Col key={item.id}>
          <img src={item.img} width="80%" />
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </Col>
      ))}
    </>
  );
}
