import ZipcodeCalculatorAPIMemory from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory";
import PlaceOrder from "../../src/application/place-order/PlaceOrder";
import PlaceOrderInput from "../../src/application/place-order/PlaceOrderInput";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";
import RepositoryFactory from "../../src/domain/factory/RepositoryFactory";
import ZipcodeCalculatorAPI from "../../src/domain/gateway/ZipcodeCalculatorAPI";

let repositoryFactory: RepositoryFactory;
let zipcodeCalculator: ZipcodeCalculatorAPI;

beforeEach(async () => {
  repositoryFactory = new MemoryRepositoryFactory();
  zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  const orderRepository = repositoryFactory.createOrderRepository();
  await orderRepository.clean();
});

test("Should place an order", async function () {
  // dto - data transfer object
  const input = new PlaceOrderInput({
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 },
    ],
    coupon: "VALE20"
  });
  const placeOrder = new PlaceOrder(repositoryFactory, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(5982);
});

test("Should place an order with an expired discount coupon", async function () {
  // dto - data transfer object
  const input = new PlaceOrderInput({
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 },
    ],
    issueDate: new Date("2020-10-10"),
    coupon: "VALE20_EXPIRED"
  });
  const placeOrder = new PlaceOrder(repositoryFactory, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(7400);
});

test("Should place an order with freight value", async function () {
  // dto - data transfer object
  const input = new PlaceOrderInput({
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 },
    ],
    issueDate: new Date("2020-10-10"),
    coupon: "VALE20_EXPIRED"
  });
  const placeOrder = new PlaceOrder(repositoryFactory, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  expect(output.freight).toBe(310);
});

test("Should place an order with an id", async function () {
  // dto - data transfer object
  const input = new PlaceOrderInput({
    cpf: "754.604.580-05",
    zipcode: "11.111-11",
    items: [
      { id: "1", quantity: 2 },
      { id: "2", quantity: 1 },
      { id: "3", quantity: 3 },
    ],
    issueDate: new Date("2020-10-10"),
    coupon: "VALE20_EXPIRED"
  });
  const placeOrder = new PlaceOrder(repositoryFactory, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  expect(output.code).toBe("202000000001");
});