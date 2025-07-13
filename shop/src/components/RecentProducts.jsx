import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RecentProducts() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("recentProducts");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  return (
    <ul
      style={{
        width: "100px",
        height: "100%",
        position: "absolute",
        right: "30px",
        backgroundColor: "white",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "10px",
        top: "40px",
        gap: "10px",
      }}
    >
      <h3 style={{ fontSize: "12px" }}>최근 본 상품</h3>
      {data.map((item) => {
        return (
          <li
            style={{
              width: "80px",
              height: "80px",
              listStyle: "none",
              border: "1px solid black",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
            }}
            key={item.id}
            onClick={() => {
              navigate(`/detail/${item.id}`, { state: { item: item } });
            }}
          >
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                item.id + 1
              }.jpg`}
              style={{ width: "100%" }}
            />
          </li>
        );
      })}
    </ul>
  );
}
