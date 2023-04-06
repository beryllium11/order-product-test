import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { type IOrder, type IProduct } from "../../app/interfaces";
import { ProductSimple } from "../product/ProductSimple";
import { useAppDispatch } from "../../app/hooks";
import { orderSlice } from "../../reducers/orderSlice";
import i18n from "../../i18n/i18n";

interface Props {
  products: IProduct[];
  onClose: () => void;
  isOpen: boolean;
  order: IOrder;
}

export const ModalRemove = ({ products, onClose, isOpen, order }: Props) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(orderSlice.actions.remove(order.id));
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>{i18n.t("removeQuestion.label")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {products.map((prod, index) => {
          return (
            <ProductSimple
              title={prod.title}
              id={prod.id}
              key={prod.id.toString() + index.toString()}
              photo={prod.photo}
              serialNumber={prod.serialNumber}
              status={prod.status}
            />
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {i18n.t("close.label")}
        </Button>
        <Button variant="danger" onClick={handleRemove}>
          {i18n.t("remove.label")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
