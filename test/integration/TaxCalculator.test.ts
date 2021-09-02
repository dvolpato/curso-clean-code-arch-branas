import Item from "../../src/domain/entity/Item";
import TaxCalculator from "../../src/domain/service/TaxCalculator";

test("Should calculate the tax of an item Guitarra", function () {
  const item = new Item("1", "Guitarra", 1000, 100, 50, 30, 8);
  const date = new Date("2021-10-10");
  const taxCalculator = new TaxCalculator();
  const amount = taxCalculator.calculate(item, date);
  expect(amount).toBe(150);
});

test("Should calculate the tax of an item Guitarra on November", function () {
  const item = new Item("1", "Guitarra", 1000, 100, 50, 30, 8);
  const date = new Date("2021-11-10");
  const taxCalculator = new TaxCalculator();
  const amount = taxCalculator.calculate(item, date);
  expect(amount).toBe(150);
});