import Item from "../entity/Item";

export default class TaxCalculator {
  constructor() {

  }
  calculate(item: Item, date: Date) {
    if (item.description === "Guitarra") {
      if (date.getMonth() !== 10) {
        return (item.price * 15) / 100;
      }
      else {
        return (item.price * 5) / 100;
      }
    }

    if (item.description === "Cabo") {
      if (date.getMonth() !== 10) {
        return (item.price * 5) / 100;
      }
      else {
        return (item.price * 1) / 100;
      }
    }

  }
}