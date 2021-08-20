import { textChangeRangeIsUnchanged } from "typescript";

export default class OrderItem {
  id: string;
  price: number;
  quantity: number;

  // Aggregate order references item by its identity

  constructor(id: string, price: number, quantity: number) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }
}