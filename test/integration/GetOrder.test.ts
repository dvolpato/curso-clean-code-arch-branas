import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import ZipcodeCalculatorAPIMemory from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory";
import PlaceOrder from "../../src/application/place-order/PlaceOrder";
import PlaceOrderInput from "../../src/application/place-order/PlaceOrderInput";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import GetOrder from "../../src/application/get-order/GetOrder";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import PgPromiseDatabase from "../../src/infra/database/PgPromiseDatabase";
import OrderRepositoryDatabase from "../../src/infra/repository/database/OrderRepositoryDatabase";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";

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
  const repositoryFactory = new MemoryRepositoryFactory();
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();

  const orderRepository = repositoryFactory.createOrderRepository();
  await orderRepository.clean();
  const placeOrder = new PlaceOrder(repositoryFactory, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  
  const getOrder = new GetOrder(repositoryFactory);
  const getOrderOutput = await getOrder.execute(output.code);  
  expect(getOrderOutput.total).toBe(5982);

});
