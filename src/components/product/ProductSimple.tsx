import React from "react";
import {
  ProductWrapper,
  RemoveIcon,
  RemoveIconWrapper,
  ThumbnailImg,
  ThumbnailWrapper,
} from "../mainStyled/mainStyled";
import { type ProductStatusType } from "../../app/interfaces";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import i18n from "../../i18n/i18n";

interface Props {
  id: number;
  serialNumber: number;
  photo: string;
  title: string;
  status: ProductStatusType;
  onRemove?: (id: string) => void;
}

export const ProductSimple = ({
  photo,
  status,
  serialNumber,
  title,
  onRemove,
  id,
}: Props) => {
  return (
    <ProductWrapper>
      <Row>
        <Col lg={1}>
          <ReadyStatus status={status} />
        </Col>
        <ThumbnailWrapper lg={1}>
          <ThumbnailImg src={photo} alt="" />
        </ThumbnailWrapper>
        <Col lg={7}>
          <p>{title}</p>
          <span>{serialNumber}</span>
        </Col>
        <Col lg={2}>
          <p style={{ color: status === "ready" ? "#cddc39" : "#888" }}>
            {i18n.t(`${status === "ready" ? "ready" : "underRepair"}.label`)}
          </p>
        </Col>
        {onRemove !== undefined && (
          <RemoveIconWrapper lg={1}>
            <RemoveIcon />
          </RemoveIconWrapper>
        )}
      </Row>
    </ProductWrapper>
  );
};

const ReadyStatus = styled.div<{ status: ProductStatusType }>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${(props) =>
      props.status === "ready" ? "#cddc39" : "#888"};
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 5px);
    top: calc(50% - 5px);
  }
`;
