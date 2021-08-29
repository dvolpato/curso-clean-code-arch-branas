import GetOrder from "../../application/GetOrder";
import DatabaseRepositoryFactory from "../factory/DatabaseRepositoryFactory";
import Http from "./Http";

export default class RoutesConfig {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  build () {
    this.http.on("get", "/orders/${code}", async (params: any, body: any) => {
      console.log('RoutestConfig -- get -- orders/code')
      const getOrder = new GetOrder(new DatabaseRepositoryFactory());
      const order = await getOrder.execute(params.code);
      return order;
    });
  }
}