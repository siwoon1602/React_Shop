import React, { useState } from "react";
import AddItem from "./AddItem";
import data from "../data";

import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  let [itemData, setItemData] = useState(data);
  let navigate = useNavigate();
  return (
    <>
      {itemData.map((item) => (
        <Col
          key={item.id}
          onClick={() => {
            navigate(`/detail/${item.id}`, { state: { item: item } });
          }}
        >
          <img
            src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}
            width="80%"
          />
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </Col>
      ))}
      <AddItem itemData={itemData} setItemData={setItemData} />
    </>
  );
}
