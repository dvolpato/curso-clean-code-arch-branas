import Coupon from "./Coupon";
import Order from "./Order";
import PlaceOrder from "./PlaceOrder";

test("Should place an order", function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    items: [
      {description: "Guitarra", price: 1000, quantity: 2},
      {description: "Amplificador", price: 5000, quantity: 1},
      {description: "Cabo", price: 30, quantity: 3},
    ],
    coupon: "VALE20"
  };
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.total).toBe(5672);
});

test("Should place an order with an expired discount coupon", function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    items: [
      {description: "Guitarra", price: 1000, quantity: 2},
      {description: "Amplificador", price: 5000, quantity: 1},
      {description: "Cabo", price: 30, quantity: 3},
    ],
    coupon: "VALE20_EXPIRED"
  };
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.total).toBe(7090);
});