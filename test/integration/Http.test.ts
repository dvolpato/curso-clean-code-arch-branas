import axios from "axios";
import PlaceOrder from "../../src/application/PlaceOrder";
import PlaceOrderInput from "../../src/application/PlaceOrderInput";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";
import ZipcodeCalculatorAPIMemory from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory";

test.skip("Should invoke API /orders/${code}", async function () {
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
  const repositoryFactory = new MemoryRepositoryFactory();
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  const orderRepository = repositoryFactory.createOrderRepository();
  await orderRepository.clean();
  const placeOrder = new PlaceOrder(repositoryFactory, zipcodeCalculator);
  const output = await placeOrder.execute(input);

  const response = await axios({
    url: "http://localhost:3000/orders/202100000001",
    method: "get"
  });
  const order = response.data;
  expect(order.code).toBe("202100000001");
  console.log(order);
});