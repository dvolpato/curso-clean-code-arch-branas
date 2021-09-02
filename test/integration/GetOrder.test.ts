import ZipcodeCalculatorAPIMemory from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory";
import PlaceOrder from "../../src/application/place-order/PlaceOrder";
import PlaceOrderInput from "../../src/application/place-order/PlaceOrderInput";
import GetOrder from "../../src/application/get-order/GetOrder";
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

test("Should get an order", async function () {
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

  const getOrder = new GetOrder(repositoryFactory);
  const getOrderOutput = await getOrder.execute(output.code);
  expect(getOrderOutput.total).toBe(5982);

});
