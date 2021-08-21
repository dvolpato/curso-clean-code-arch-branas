import Coupon from "./Coupon";
import Order from "./Order";
import PlaceOrder from "./PlaceOrder";

test("Should place an order", function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      {id: "1", quantity: 2},
      {id: "2", quantity: 1},
      {id: "3", quantity: 3},
    ],
    coupon: "VALE20"
  };
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.total).toBe(5982);
});

test("Should place an order with an expired discount coupon", function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      {id: "1", quantity: 2},
      {id: "2", quantity: 1},
      {id: "3", quantity: 3},
    ],
    coupon: "VALE20_EXPIRED"
  };
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.total).toBe(7400);
});

test("Should place an order with freight value", function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      {id: "1", quantity: 2},
      {id: "2", quantity: 1},
      {id: "3", quantity: 3},
    ],
    coupon: "VALE20_EXPIRED"
  };
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.freight).toBe(310);
});