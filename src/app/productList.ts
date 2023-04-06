import { type IProduct } from "./interfaces";
import image from "./../assets/monitor.jpeg";

export const products1: IProduct[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: true,
    photo: image,
    title: "Very-very long name of product 1",
    status: "ready",
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
    photo: image,
    title: "Very-very long name of product 2",
    type: "TVs",
    status: "ready",
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
    id: 3,
    serialNumber: 1234,
    isNew: true,
    photo: image,
    title: "Very-very long name of product 3",
    type: "Laptops",
    status: "under repair",
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
];

export const products2: IProduct[] = [
  {
    id: 4,
    serialNumber: 1234,
    isNew: true,
    photo: image,
    title: "Very-very long name of product 4",
    status: "ready",
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
    order: 2,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: false,
    photo: image,
    title: "Very-very long name of product 5",
    type: "TVs",
    status: "ready",
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
    id: 6,
    serialNumber: 1234,
    isNew: true,
    photo: image,
    title: "Very-very long name of product 6",
    type: "Laptops",
    status: "under repair",
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

export const products3: IProduct[] = [
  {
    id: 7,
    serialNumber: 1234,
    isNew: true,
    photo: image,
    title: "Very-very long name of product 7",
    status: "ready",
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
    order: 3,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 8,
    serialNumber: 1234,
    isNew: false,
    photo: image,
    title: "Very-very long name of product 8",
    type: "TVs",
    status: "ready",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 3,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 9,
    serialNumber: 1234,
    isNew: true,
    photo: image,
    title: "Very-very long name of product 9",
    type: "Laptops",
    status: "under repair",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 3,
    date: "2017-06-29 12:09:33",
  },
];

export const products = [...products1, ...products2, ...products3];
