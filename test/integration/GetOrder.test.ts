import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import ZipcodeCalculatorAPIMemory from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory";
import PlaceOrder from "../../src/application/PlaceOrder";
import PlaceOrderInput from "../../src/application/PlaceOrderInput";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import GetOrder from "../../src/application/GetOrder";

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
  //const itemRepository = new ItemRepositoryDatabase(new PgPromiseDatabase);
  const itemRepository = new ItemRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository, zipcodeCalculator);
  const output = await placeOrder.execute(input);
  
  
  const getOrder = new GetOrder(itemRepository, couponRepository, orderRepository);
  const getOrderOutput = await getOrder.execute(output.code);  
  expect(getOrderOutput.total).toBe(5982);

});
