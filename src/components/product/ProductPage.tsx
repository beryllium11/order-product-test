import React from "react";
import { connect } from "react-redux";
import { type RootState } from "../../app/store";
import { getOrderNameById, type OrderNameById } from "../order/orderSelector";
import { type IProduct, PRODUCT_TYPE, ProductType } from "../../app/interfaces";
import { Product } from "./Product";
import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useAppDispatch } from "../../app/hooks";
import { productSlice } from "../../reducers/productSlice";
import styled from "styled-components";

interface Props {
  products: IProduct[];
  orderNameById: OrderNameById;
}

const ProductPageStateless = ({ products, orderNameById }: Props) => {
  const dispatch = useAppDispatch();
  const handleTypeChange = (value: string) => {
    dispatch(productSlice.actions.filterByType(value));
  };
  const handleConditionChange = (value: boolean | "all") => {
    dispatch(productSlice.actions.filterByCondition(value));
  };
  return (
    <div>
      <Container>
        <Row>
          <SelectWrapper md={5}>
            <Form.Select
              onChange={(event) => handleTypeChange(event.currentTarget.value)}
            >
              <option value="all">All types</option>
              {Object.values(PRODUCT_TYPE).map((type, index) => {
                return (
                  <option key={"option" + index.toString()} value={type}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </SelectWrapper>
          <SelectWrapper md={{ span: 5, offset: 2 }}>
            <Form.Select
              onChange={(event) => {
                if (event.currentTarget.value === "all") {
                  handleConditionChange("all");
                } else {
                  handleConditionChange(Boolean(event.currentTarget.value));
                  console.log(Boolean(event.currentTarget.value));
                }
              }}
            >
              <option value="all">All Conditions</option>
              <option value="1">New</option>
              <option value="">Used</option>
            </Form.Select>
          </SelectWrapper>
        </Row>
      </Container>

      {products.map((product, index) => {
        return (
          <Product
            key={product.id.toString() + index.toString()}
            product={product}
            orderName={orderNameById[product.order]}
          />
        );
      })}
    </div>
  );
};

const SelectWrapper = styled(Col)`
  padding: 0;
  margin-bottom: 10px;
`;

const mapStateToProps = (state: RootState) => ({
  products: state.reducer.productReducer.products,
  orderNameById: getOrderNameById(state),
});

export const ProductPage = connect(mapStateToProps, null)(ProductPageStateless);
