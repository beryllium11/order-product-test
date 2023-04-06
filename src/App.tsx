import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import {
  LinkStyled,
  MainSection,
  NavBar,
} from "./components/mainStyled/mainStyled";
import { Header } from "./components/header/Header";
import i18n from "./i18n/i18n";

const OrderPageLazy = React.lazy(() =>
  import("./components/order/OrderPage").then(({ OrderPage }) => ({
    default: OrderPage,
  })),
);

const ProductPageLazy = React.lazy(() =>
  import("./components/product/ProductPage").then(({ ProductPage }) => ({
    default: ProductPage,
  })),
);

function App() {
  return (
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        <Header />
      </Row>
      <Row className="justify-content-md-start">
        <NavBar md={1}>
          <p>
            <LinkStyled to="/">{i18n.t("orders.label")}</LinkStyled>
          </p>
          <p>
            <LinkStyled to="/product">{i18n.t("products.label")}</LinkStyled>
          </p>
          <p>
            <LinkStyled to="/">{i18n.t("groups.label")}</LinkStyled>
          </p>
          <p>
            <LinkStyled to="/">{i18n.t("users.label")}</LinkStyled>
          </p>
          <p>
            <LinkStyled to="/">{i18n.t("settings.label")}</LinkStyled>
          </p>
        </NavBar>
        <MainSection md={11}>
          <Suspense>
            <Routes>
              <Route path="/" element={<OrderPageLazy />} />
              <Route path="/product" element={<ProductPageLazy />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </MainSection>
      </Row>
    </Container>
  );
}

export default App;
