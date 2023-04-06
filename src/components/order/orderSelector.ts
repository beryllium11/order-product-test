import { createSelector } from "@reduxjs/toolkit";
import { type IPrice } from "../../app/interfaces";
import { type RootState } from "../../app/store";

export type OrderPriceById = Record<string, IPrice[]>;
export type OrderNameById = Record<string, string>;

const getOrders = (state: RootState) => state.reducer.orderReducer.orders;

export const getOrderPriceById = createSelector(getOrders, (orders) => {
  const price: OrderPriceById = {};
  orders.map((order) => {
    const usdOrderPrice: IPrice = { isDefault: false, value: 0, symbol: "USD" };
    const uahOrderPrice: IPrice = { isDefault: true, value: 0, symbol: "UAH" };
    order.products.map((prod) => {
      const uahProdPrice = prod.price.find(
        (price) => price.symbol === "UAH",
      )?.value;
      const usdProdPrice = prod.price.find(
        (price) => price.symbol === "USD",
      )?.value;
      uahOrderPrice.value = uahProdPrice ?? 0;
      usdOrderPrice.value += usdProdPrice ?? 0;
    });
    price[order.id] = [usdOrderPrice, uahOrderPrice];
  });
  return price;
});

export const getOrderNameById = createSelector(getOrders, (orders) => {
  const names: OrderNameById = {};
  orders.map((order) => {
    names[order.id] = order.title;
  });
  return names;
});
