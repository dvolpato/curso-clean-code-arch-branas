export default class PlaceOrderOutput {
  code: string;
  total: number;
  freight: number;

  constructor({ code, total, freight }: { code: string, total: number, freight: number }) {
    this.total = total;
    this.freight = freight;
    this.code = code;
  }
}