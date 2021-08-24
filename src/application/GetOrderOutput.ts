export default class GetOrderOutput {
  code: string;
  total: number;
  freight: number;
  orderItems: { itemDescription: string, price: number, quantity: number }[];

  constructor({ code, total, freight, orderItems }: { code: string, total: number, freight: number, orderItems: { itemDescription: string, price: number, quantity: number }[] }) {
    this.total = total;
    this.freight = freight;
    this.code = code;
    this.orderItems = orderItems;
  }
}