import Item from "../entity/Item";

export default class TaxCalculator {
  constructor() {

  }
  calculate(item: Item, date: Date) {
    if (item.description === "Guitarra") {
      return (item.price * 15)/100;
    }
  }
}