import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { plusStock, minusStock } from "../store";
import { plusAge } from "../store";

export default function Cart() {
  const a = useSelector((state) => {
    return state.data;
  });

  const user = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        {user.user} {user.age}세 의 장바구니{" "}
        <button
          onClick={() => {
            dispatch(plusAge(10));
          }}
        >
          +
        </button>
      </h3>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {a.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => dispatch(plusStock(item.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(minusStock(item.id))}>
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
