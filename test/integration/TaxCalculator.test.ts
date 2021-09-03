import Item from "../../src/domain/entity/Item";
import TaxTable from "../../src/domain/entity/TaxTable";
import TaxCalculatorFactory from "../../src/domain/factory/TaxCalculatorFactory";

describe("TaxCalculator - Normal months", () => {
  const date = new Date("2021-10-10");
  const taxCalculator = TaxCalculatorFactory.create(date);

  test("Should calculate the tax of an item Guitarra", function () {
    const item = new Item("1", "Guitarra", 1000, 100, 50, 30, 8);
    const taxTables = [
      new TaxTable("1", "default", 15),
      new TaxTable("1", "november", 5),
    ];
    const amount = taxCalculator.calculate(item, taxTables);
    expect(amount).toBe(150);
  });

  test("Should calculate the tax of an item Cabo", function () {
    const item = new Item("3", "Cabo", 30, 10, 10, 10, 1);
    const taxTables = [
      new TaxTable("3", "default", 5),
      new TaxTable("3", "november", 1),
    ];
    const amount = taxCalculator.calculate(item, taxTables);
    expect(amount).toBe(1.5);
  });
});

describe("TaxCalculator - November", () => {
  const date = new Date("2021-11-10");
  const taxCalculator = TaxCalculatorFactory.create(date);

  test("Should calculate the tax of an item Guitarra", function () {
    const item = new Item("1", "Guitarra", 1000, 100, 50, 30, 8);
    const taxTables = [
      new TaxTable("1", "default", 15),
      new TaxTable("1", "november", 5),
    ];
    const amount = taxCalculator.calculate(item, taxTables);
    expect(amount).toBe(50);
  });

  test("Should calculate the tax of an item Cabo", function () {
    const item = new Item("3", "Cabo", 30, 10, 10, 10, 1);
    const taxTables = [
      new TaxTable("3", "default", 5),
      new TaxTable("3", "november", 1),
    ];
    const amount = taxCalculator.calculate(item, taxTables);
    expect(amount).toBe(0.3);
  });
});

