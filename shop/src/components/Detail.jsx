import React from "react";
import data from "../data";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  let productNo = data.find((i) => {
    return i.id === Number(id);
  });
  return (
    <div className="container">
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
        </div>
      </div>
    </div>
  );
}
