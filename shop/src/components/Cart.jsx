import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { plusStock, minusStock } from "../store";

export default function Cart() {
  const a = useSelector((state) => {
    return state.data;
  });
  const dispatch = useDispatch();

  return (
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
                <button onClick={() => dispatch(plusStock(item.id))}>+</button>
                <button onClick={() => dispatch(minusStock(item.id))}>-</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
