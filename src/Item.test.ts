import Item from "./Item";

test("Should calculate the volume of an item", () => {
  const item = new Item("1", "Amplificador", 5000, 50, 50, 50, 22);
  const volume = item.getVolume();
  expect(volume).toBe(0.125); // 50/100 * 50/100 * 50/100
});

test("Should calculate the density of an item", () => {
  const item = new Item("1", "Amplificador", 5000, 50, 50, 50, 22);
  const density = item.getDensity();
  expect(density).toBe(176);
});