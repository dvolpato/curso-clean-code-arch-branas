import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";
import ZipcodeCalculatorAPI from "../../domain/gateway/ZipcodeCalculatorAPI";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import OrderCreator from "../../domain/service/OrderCreator";

export default class PlaceOrder {
  repositoryFactory: RepositoryFactory;
  zipcodeCalculator: ZipcodeCalculatorAPI;

  constructor(repositoryFactory: RepositoryFactory, zipcodeCalculator: ZipcodeCalculatorAPI) {
    this.repositoryFactory = repositoryFactory;
    this.zipcodeCalculator = zipcodeCalculator;
  }

  async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const orderCreator = new OrderCreator(this.repositoryFactory, this.zipcodeCalculator);
    const order = await orderCreator.create(input);
    const total = order.getTotal();
    return new PlaceOrderOutput({
      freight: order.freight,
      code: order.code.value,
      taxes: order.taxes,
      total
    });
  }
}