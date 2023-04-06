import React from "react";
import {
  ProductWrapper,
  RemoveIcon,
  RemoveIconWrapper,
  ThumbnailImg,
  ThumbnailWrapper,
} from "../mainStyled/mainStyled";
import { Col, Row } from "react-bootstrap";
import { type IProduct } from "../../app/interfaces";
import styled from "styled-components";

interface Props {
  product: IProduct;
  orderName: string;
}

export const Product = ({ product, orderName }: Props) => {
  const { type, title, photo, serialNumber, price, guarantee } = product;

  return (
    <ProductWrapper style={{ marginBottom: 10 }}>
      <Row xs="auto">
        <ThumbnailWrapper>
          <ThumbnailImg src={photo} alt="" />
        </ThumbnailWrapper>
        <Col md={3}>
          <p>{title}</p>
          <span>{serialNumber}</span>
        </Col>
        <Col md={1}>
          <p>{type}</p>
        </Col>
        <GuaranteeCol md={2}>
          <div>
            <span>from</span>
            <p>{guarantee.start}</p>
          </div>
          <div>
            <span>to</span>
            <p>{guarantee.end}</p>
          </div>
        </GuaranteeCol>
        <Col md={1}>
          {price.map((p) => {
            return p.isDefault ? (
              <p>{`${p.value} ${p.symbol}`}</p>
            ) : (
              <span style={{ fontSize: 12 }}>{`${p.value} ${p.symbol}`}</span>
            );
          })}
        </Col>
        <Col md={3}>
          <p style={{ fontSize: 15 }}>{orderName}</p>
        </Col>
        <RemoveIconWrapper md={1}>
          <RemoveIcon />
        </RemoveIconWrapper>
      </Row>
    </ProductWrapper>
  );
};

const GuaranteeCol = styled(Col)`
  display: flex;
  flex-direction: column;
  & p {
    display: inline-block;
    margin-left: 10px;
  }
`;
