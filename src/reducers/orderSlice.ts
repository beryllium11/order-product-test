import { type IOrder } from "../app/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { products1, products2, products3 } from "../app/productList";

interface IOrderState {
  orders: IOrder[];
}

const initialState: IOrderState = {
  orders: [
    {
      id: 1,
      title: "Very-very long title with many words and line-break Order 1",
      date: "2017-06-29 12:09:33",
      description: "desc",
      get products() {
        return products1;
      },
    },
    {
      id: 2,
      title: "Very-very long title with many words and line-break Order 2",
      date: "2017-06-29 12:09:33",
      description: "desc",
      get products() {
        return products2;
      },
    },
    {
      id: 3,
      title: "Very-very long title with many words and line-break Order 3",
      date: "2017-06-29 12:09:33",
      description: "desc",
      get products() {
        return products3;
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

export default orderSlice.reducer;
