export default class PlaceOrderOutput {
  code: string;
  total: number;
  freight: number;
  taxes: number;

  constructor({ code, taxes, total, freight }: { code: string, taxes: number, total: number, freight: number }) {
    this.total = total;
    this.taxes = taxes;
    this.freight = freight;
    this.code = code;
  }
}