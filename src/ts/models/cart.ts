import { Product } from "./productcatalog";

export class CartItem {
  product: Product;
  qty: number;

  constructor(product: Product, qty: number) {
    this.product = product;
    this.qty = qty;
  }
}