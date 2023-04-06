import { type IProduct, type ProductType } from "../app/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { products } from "../app/productList";

export interface IProductState {
  products: IProduct[];
}

const initialState: IProductState = {
  products,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByType(state: IProductState, action: PayloadAction<string>) {
      state.products = initialState.products;
      if (action.payload === "all") {
        return state;
      }
      state.products = state.products.filter((prod) => {
        return prod.type === action.payload;
      });
    },
    filterByCondition(
      state: IProductState,
      action: PayloadAction<boolean | "all">,
    ) {
      state.products = initialState.products;
      if (action.payload === "all") {
        return state;
      }
      state.products = state.products.filter((prod) => {
        return prod.isNew === action.payload;
      });
    },
  },
});

export default productSlice.reducer;
