import { type IOrder } from "../app/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { products } from "./productSlice";

interface IOrderState {
  orders: IOrder[];
}

const initialState: IOrderState = {
  orders: [
    {
      id: 1,
      title: "Order 1",
      date: "2017-06-29 12:09:33",
      description: "desc",
      get products() {
        return products;
      },
    },
    {
      id: 2,
      title: "Order 2",
      date: "2017-06-29 12:09:33",
      description: "desc",
      get products() {
        return products;
      },
    },
    {
      id: 3,
      title: "Order 3",
      date: "2017-06-29 12:09:33",
      description: "desc",
      get products() {
        return products;
      },
    },
  ],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    remove(state: IOrderState, action: PayloadAction<number>) {
      state.orders = state.orders.filter((order) => {
        return order.id !== action.payload;
      });
    },
  },
});
