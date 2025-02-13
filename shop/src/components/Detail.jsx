import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

import { useParams, useLocation } from "react-router-dom";

export default function Detail() {
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [value, setValue] = useState(0);
  const { state } = useLocation();
  useEffect(() => {
    if (isNaN(value) == true) {
      window.alert("그러지마세요");
    }

    let alert = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(alert);
    };
  }, [value]);

  let productNo = state.item;
  return (
    <p>
      <div className="container">
        {alert ? (
          <div className="alert alert-warring">2초 이내 구매시 할인!</div>
        ) : null}
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          클릭!
        </button>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                productNo.id + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{productNo.title}</h4>
            <p>{productNo.content}</p>
            <p>{productNo.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <input
              type="text"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
    </p>
  );
}
