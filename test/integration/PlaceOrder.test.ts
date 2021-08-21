import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import ZipcodeCalculatorAPIMemory from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory";
import PlaceOrder from "../../src/application/PlaceOrder";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import PgPromiseDatabase from "../../src/infra/database/PgPromiseDatabase";

test("Should place an order", async function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 },
    ],
    coupon: "VALE20"
  };
  const itemRepository = new ItemRepositoryDatabase(new PgPromiseDatabase);
  const couponRepository = new CouponRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(5982);
});

test("Should place an order with an expired discount coupon", async function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 },
    ],
    coupon: "VALE20_EXPIRED"
  };
  const itemRepository = new ItemRepositoryDatabase(new PgPromiseDatabase);
  const couponRepository = new CouponRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(7400);
});

test("Should place an order with freight value", async function () {
  // dto - data transfer object
  const input = {
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 },
    ],
    coupon: "VALE20_EXPIRED"
  };
  const itemRepository = new ItemRepositoryDatabase(new PgPromiseDatabase);
  const couponRepository = new CouponRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  expect(output.freight).toBe(310);
});