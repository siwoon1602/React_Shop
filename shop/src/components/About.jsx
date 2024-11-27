import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h4>회사 정보임ㅋ</h4>
      <Outlet></Outlet>
    </div>
  );
}
