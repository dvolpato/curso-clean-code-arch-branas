import StockCalculator from "../../src/domain/service/StockCalculator";
import StockEntry from "../../src/domain/entity/StockEntry";

test("Should calculate the stock of an item", () => {
  const stockCalculator = new StockCalculator();
  const stockEntries = [
    new StockEntry("1", "in", 3, new Date("2021-09-12")),
    new StockEntry("1", "out", 2, new Date("2021-09-12")),
    new StockEntry("1", "in", 2, new Date("2021-09-12")),
  ];
  const quantity = stockCalculator.calculate(stockEntries);
  expect(quantity).toBe(3);
});
