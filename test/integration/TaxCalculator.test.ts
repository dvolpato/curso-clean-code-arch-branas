import Item from "../../src/domain/entity/Item";
import DefaultTaxCalculator from "../../src/domain/service/DefaultTaxCalculator";
import NovemberTaxCalculator from "../../src/domain/service/NovemberTaxCalculator";

describe("TaxCalculator - Normal months", () => {
  const date = new Date("2021-10-10");

  test("Should calculate the tax of an item Guitarra", function () {
    const item = new Item("1", "Guitarra", 1000, 100, 50, 30, 8);
    const taxCalculator = new DefaultTaxCalculator();
    const amount = taxCalculator.calculate(item, date);
    expect(amount).toBe(150);
  });

  test("Should calculate the tax of an item Cabo", function () {
    const item = new Item("3", "Cabo", 30, 10, 10, 10, 1);
    const taxCalculator = new DefaultTaxCalculator();
    const amount = taxCalculator.calculate(item, date);
    expect(amount).toBe(1.5);
  });
});

describe("TaxCalculator - November", () => {
  const date = new Date("2021-11-10");

  test("Should calculate the tax of an item Guitarra", function () {
    const item = new Item("1", "Guitarra", 1000, 100, 50, 30, 8);
    const taxCalculator = new NovemberTaxCalculator();
    const amount = taxCalculator.calculate(item, date);
    expect(amount).toBe(50);
  });

  test("Should calculate the tax of an item Cabo", function () {
    const item = new Item("3", "Cabo", 30, 10, 10, 10, 1);
    const taxCalculator = new NovemberTaxCalculator();
    const amount = taxCalculator.calculate(item, date);
    expect(amount).toBe(0.3);
  });
});

