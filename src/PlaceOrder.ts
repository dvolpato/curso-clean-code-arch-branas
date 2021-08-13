import Coupon from "./Coupon";
import Order from "./Order"
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder {
  coupons: Coupon[];
  orders: Order[];

  constructor() {
    this.coupons = [
      new Coupon("VALE20", 20)
    ];
    this.orders = [];
  }

  execute (input: PlaceOrderInput): PlaceOrderOutput {
    const order = new Order(input.cpf);
    for (const item of input.items) {
      order.addItem(item.description, item.price, item.quantity);
    }
    if (input.coupon) {
      const coupon = this.coupons.find(coupon => coupon.code === input.coupon);
      if (coupon) order.addCoupon(coupon);
    }
    const total = order.getTotal();
    this.orders.push(order);
    return new PlaceOrderOutput(total);
  }
}