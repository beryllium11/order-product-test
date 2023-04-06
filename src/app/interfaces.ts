export type CurrencyType = "USD" | "UAH";
export const PRODUCT_TYPE = {
  monitors: "Monitors",
  tvs: "TVs",
  laptops: "Laptops",
} as const;
export type ProductKeyType = keyof typeof PRODUCT_TYPE;
export type ProductType = (typeof PRODUCT_TYPE)[ProductKeyType];
export type ProductStatusType = "ready" | "under repair";

export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: boolean;
  photo: string;
  title: string;
  type: ProductType;
  status: ProductStatusType;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: IPrice[];
  order: number;
  date: string;
}

export interface IPrice {
  value: number;
  symbol: CurrencyType;
  isDefault: boolean;
}

export interface IOrder {
  id: number;
  title: string;
  date: string;
  description: string;
  readonly products: IProduct[];
}
