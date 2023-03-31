import { type IProduct, type ProductType } from "../app/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
  products: IProduct[];
}

export const products: IProduct[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: true,
    photo: "pathToFile.jpg",
    title: "Product 1",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: false,
    photo: "pathToFile.jpg",
    title: "Product 2",
    type: "TVs",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: true,
    photo: "pathToFile.jpg",
    title: "Product 3",
    type: "Laptops",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
];

const initialState: IProductState = {
  products,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByType(state: IProductState, action: PayloadAction<ProductType>) {
      state.products = state.products.filter((prod) => {
        return prod.type === action.payload;
      });
    },
    filterByCondition(state: IProductState, action: PayloadAction<boolean>) {
      state.products = state.products.filter((prod) => {
        return prod.isNew === action.payload;
      });
    },
  },
});
