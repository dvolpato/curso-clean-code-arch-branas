import FreightCalculator from "./FreightCalculator";
import Item from "./Item";

test("Should calculate freight of guitar", () => {
  const item = new Item("1", "Guitarra", 1000, 100, 50, 15, 3);
  const distance = 1000;
  const price = FreightCalculator.calculate(distance, item);
  expect(price).toBe(30);
})

test("Should calculate freight of amp", () => {
  const item = new Item("2", "Amplificador", 5000, 50, 50, 50, 22);
  const distance = 1000;
  const price = FreightCalculator.calculate(distance, item);
  expect(price).toBe(220);
})