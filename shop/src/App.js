import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { useState, createContext } from "react";
import data from "./data";
import Product from "./components/Product";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/About";
import styled from "styled-components";
import Cart from "./components/Cart";

let Tap = styled.a`
  color: white;
`;
let Box = styled.div`
  display: flex;
  gap: 20px;
  background: grey;
  padding: 20px;
`;

export const Context = createContext();

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <>
      <div className="App">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                Detail
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-bg"></div>
                <Container className="colum">
                  <Row>
                    <Product />
                  </Row>
                </Container>
              </>
            }
          ></Route>
          <Route
            path="/detail/:id"
            element={
              <Context.Provider value={shoes}>
                <Detail />
              </Context.Provider>
            }
          ></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치정보임</div>} />
          </Route>
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일 기념 쿠폰받기</p>} />
          </Route>

          {/* 404 에러 */}
        </Routes>
      </div>
    </>
  );
}
function Event() {
  return (
    <>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </>
  );
}
export default App;
