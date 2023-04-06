import React, { useCallback, useState } from "react";
import { Order } from "./Order";
import { type RootState } from "../../app/store";
import { getOrderPriceById, type OrderPriceById } from "./orderSelector";
import { connect } from "react-redux";
import { type IOrder, type IProduct } from "../../app/interfaces";
import { CloseButton, Col, Container, Modal, Row } from "react-bootstrap";
import { ProductSimple } from "../product/ProductSimple";
import styled from "styled-components";
import { ModalRemove } from "./ModalRemove";
import i18n from "../../i18n/i18n";

interface Props {
  orders: IOrder[];
  orderPriceById: OrderPriceById;
}

const OrderPageStateless = ({ orderPriceById, orders }: Props) => {
  const [isProductsOpen, setIsProductOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(orders[0]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = useCallback(
    (currentProducts: IProduct[], order: IOrder) => {
      // e.stopPropagation();
      setCurrentOrder(order);
      setProducts(currentProducts);
      setShowModal(true);
    },
    [],
  );

  const handleClose = () => setIsProductOpen(false);
  const handleShow = useCallback((currentProducts: IProduct[]) => {
    setIsProductOpen(true);
    setProducts(currentProducts);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {i18n.t("orders.label")} / {orders.length}
          </Col>
        </Row>
        <OrderListWrapper>
          <Col
            style={{ transition: "width, 0.3s" }}
            md={isProductsOpen ? 4 : 12}
          >
            {orders.map((order, index) => {
              return (
                <Order
                  id={order.id}
                  title={order.title}
                  price={orderPriceById[order.id]}
                  onOpen={handleShow}
                  products={order.products}
                  onClose={handleClose}
                  isOrderOpen={isProductsOpen}
                  onRemove={handleModalShow}
                  date={order.date}
                  description={order.description}
                  key={order.id.toString() + index.toString()}
                />
              );
            })}
          </Col>
          <ShortProductsWrapper
            isOrderOpen={isProductsOpen}
            md={isProductsOpen ? 8 : 0}
          >
            <CloseButtonStyled onClick={handleClose} />
            {products.map((prod, index) => {
              return (
                <ProductSimple
                  title={prod.title}
                  onRemove={() => {}}
                  id={prod.id}
                  key={prod.id.toString() + index.toString()}
                  photo={prod.photo}
                  serialNumber={prod.serialNumber}
                  status={prod.status}
                />
              );
            })}
          </ShortProductsWrapper>
        </OrderListWrapper>
      </Container>
      <ModalRemove
        onClose={handleModalClose}
        isOpen={showModal}
        products={products}
        order={currentOrder}
      />
    </div>
  );
};

const OrderListWrapper = styled(Row)`
  position: relative;
  overflow: hidden;
  padding: 10px;
  height: 100vh;
`;

const ShortProductsWrapper = styled(Col)<{ isOrderOpen: boolean }>`
  position: absolute;
  overflow: visible;
  right: ${(props) => (props.isOrderOpen ? 0 : "-100%")};
  opacity: ${(props) => (props.isOrderOpen ? 1 : 0)};
  transition: right, 0.3s;
`;

const CloseButtonStyled = styled(CloseButton)`
  position: absolute;
  right: 0;
  top: -10px;
  padding: 10px;
  font-size: 10px;
  z-index: 5;
  opacity: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
`;

const mapStateToProps = (state: RootState) => ({
  orders: state.reducer.orderReducer.orders,
  orderPriceById: getOrderPriceById(state),
});

export const OrderPage = connect(mapStateToProps, null)(OrderPageStateless);
