export default class GetOrderOutput {
  code: string;
  total: number;
  freight: number;
  orderItems: { itemDescription: string, price: number, quantity: number }[];
  taxes: number;

  constructor({ code, taxes, total, freight, orderItems }: { code: string, taxes: number, total: number, freight: number, orderItems: { itemDescription: string, price: number, quantity: number }[] }) {
    this.total = total;
    this.taxes = taxes;
    this.freight = freight;
    this.code = code;
    this.orderItems = orderItems;
  }
}