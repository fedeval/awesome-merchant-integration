export interface Product {
  id?: number;
  name: string;
  price: number;
  url: string;
  description: string;
  availableAmount: number;
  selectedAmount?: number;
}
