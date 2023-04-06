import React from "react";
import { type IOrder, type IPrice, type IProduct } from "../../app/interfaces";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { RemoveIcon, RemoveIconWrapper } from "../mainStyled/mainStyled";
import { ReactComponent as menu } from "./../../assets/menu.svg";
import moment from "moment";
import i18n from "../../i18n/i18n";

interface Props {
  id: number;
  title: string;
  date: string;
  description: string;
  isOrderOpen: boolean;
  products: IProduct[];
  price: IPrice[];
  onRemove: (products: IProduct[], order: IOrder) => void;
  onOpen: (products: IProduct[]) => void;
  onClose: () => void;
}

export const Order = ({
  id,
  isOrderOpen,
  onOpen,
  date,
  description,
  onRemove,
  products,
  price,
  title,
}: Props) => {
  const handleOpen = () => {
    onOpen(products);
  };
  const handleRemove = (e: any) => {
    e.stopPropagation();
    onRemove(products, { id, products, date, description, title });
  };

  const longDate = moment(date).format("DD / MMM / YYYY");
  const shortDate = moment(date).format("DD / MM");
  return (
    <OrderWrapper onClick={handleOpen}>
      <Row>
        {!isOrderOpen && (
          <ColWithNoWrap md={6}>
            <p>{title}</p>
          </ColWithNoWrap>
        )}
        <ColWithNoWrap md={isOrderOpen ? 6 : 2}>
          <ProductCount>
            <MenuIconWrapper>
              <MenuIcon />
            </MenuIconWrapper>
            <div>
              <p>{products.length}</p>
              <span>{i18n.t("products.label")}</span>
            </div>
          </ProductCount>
        </ColWithNoWrap>
        <ColWithNoWrap md={isOrderOpen ? 6 : 2}>
          <span>{shortDate}</span>
          <p>{longDate}</p>
        </ColWithNoWrap>
        {!isOrderOpen && (
          <ColWithNoWrap md={1}>
            {price.map((p, index) => {
              return p.isDefault ? (
                <p key={id.toString() + "p"}>{`${p.value} ${p.symbol}`}</p>
              ) : (
                <span
                  key={id.toString() + "span"}
                  style={{ fontSize: 12 }}
                >{`${p.value} ${p.symbol}`}</span>
              );
            })}
          </ColWithNoWrap>
        )}
        {!isOrderOpen && (
          <RemoveIconWrapper md={1} onClick={(e: any) => handleRemove(e)}>
            <RemoveIcon />
          </RemoveIconWrapper>
        )}
      </Row>
    </OrderWrapper>
  );
};

const ColWithNoWrap = styled(Col)`
  & p,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const OrderWrapper = styled(Container)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fff;
  position: relative;
  transition: 0.3s;

  & p {
    font-size: 14px;
    margin: 5px 0;
  }

  & span {
    font-size: 12px;
    margin: 5px 0;
    display: block;
    color: #888;
  }

  &:hover {
    box-shadow: 0 12px 20px #c2c5c5;
    transition: 0.3s;
    z-index: 5;
  }
`;

const MenuIcon = styled(menu)`
  width: 32px;
  padding: 3px;
  display: inline-block;
  border: 1px solid #888;
  border-radius: 50%;
  height: auto;
`;

const MenuIconWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const ProductCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
