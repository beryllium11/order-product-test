import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { OrderPage } from "./components/order/OrderPage";
import { ProductPage } from "./components/product/ProductPage";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {
  Header,
  LinkStyled,
  MainSection,
  NavBar,
} from "./components/mainStyled/mainStyled";

function App() {
  return (
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        <Header>
          <Col>Header</Col>
        </Header>
      </Row>
      <Row className="justify-content-md-start">
        <NavBar md={1}>
          <LinkStyled to="/">Приход</LinkStyled>
          <LinkStyled to="/product">Продукты</LinkStyled>
          <LinkStyled to="/">Группы</LinkStyled>
          <LinkStyled to="/">Пользователи</LinkStyled>
          <LinkStyled to="/">Настройки</LinkStyled>
        </NavBar>
        <MainSection md={11}>
          <Routes>
            <Route path="/" element={<OrderPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainSection>
      </Row>
    </Container>
  );
}

export default App;
