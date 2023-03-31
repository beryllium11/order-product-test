export type CurrencyType = "USD" | "UAH";
export type ProductType = "Monitors" | "TVs" | "Laptops";

export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: boolean;
  photo: string;
  title: string;
  type: ProductType;
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
