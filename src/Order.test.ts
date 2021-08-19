import Coupon from "./Coupon";
import Order from "./Order";

test("should not create an order with invalid CPF", function () {
  const cpf = "111.111.111-11";
  expect(() => new Order(cpf)).toThrow(new Error("Invalid CPF"));
});

test("should create an order with valid CPF", () => {
  const cpf = "754.604.580-05";
  const order = new Order(cpf);
  order.addItem("Guitarra", 1000, 2);
  order.addItem("Amplificador", 5000, 1);
  order.addItem("Cabo", 30, 3);
  const total = order.getTotal();
  expect(total).toBe(7090);
})

test("should create an order with discount", function () {
  const cpf = "754.604.580-05";
  const order = new Order(cpf);
  order.addItem("Guitarra", 1000, 2);
  order.addItem("Amplificador", 5000, 1);
  order.addItem("Cabo", 30, 3);
  order.addCoupon(new Coupon ("VALE20", 20, new Date("2021-10-10")));
  const total = order.getTotal();
  expect(total).toBe(5672);
});