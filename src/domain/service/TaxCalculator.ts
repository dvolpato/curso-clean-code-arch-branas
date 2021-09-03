import Item from "../entity/Item";

export default abstract class TaxCalculator {
  constructor() {

  }

  calculate(item: Item, date: Date) {
    return item.price * this.getTax(item) / 100;
  }

  abstract getTax(item: Item): number;
}