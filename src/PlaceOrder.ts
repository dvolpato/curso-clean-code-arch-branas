import Coupon from "./Coupon";
import CouponRepository from "./CouponRepository";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import ItemRepository from "./ItemRepository";
import Order from "./Order"
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";
import ZipcodeCalculatorAPIMemory from "./ZipcodeCalculatorAPIMemory";

export default class PlaceOrder {
  orders: Order[];
  zipcodeCalculator: ZipcodeCalculatorAPIMemory;
  itemRepository: ItemRepository;
  couponRepository: CouponRepository;

  constructor(itemRepository: ItemRepository, couponRepository: CouponRepository) {
    this.itemRepository = itemRepository;
    this.couponRepository = couponRepository;
    this.orders = [];
    this.zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  }

  execute(input: PlaceOrderInput): PlaceOrderOutput {
    const order = new Order(input.cpf);
    const distance = this.zipcodeCalculator.calculate(input.zipcode, "99.999-999");
    for (const orderItem of input.items) {
      const item = this.itemRepository.getById(orderItem.id);
      if (!item) throw new Error("Item not found");
      order.addItem(orderItem.id, item.price, orderItem.quantity);
      order.freight += FreightCalculator.calculate(distance, item) * orderItem.quantity;
    }
    if (input.coupon) {
      const coupon = this.couponRepository.getByCode(input.coupon);
      if (coupon) order.addCoupon(coupon);
    }
    const total = order.getTotal();
    this.orders.push(order);
    return new PlaceOrderOutput({ freight: order.freight, total });
  }
}