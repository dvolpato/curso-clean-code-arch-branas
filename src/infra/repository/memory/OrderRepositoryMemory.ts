import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
  orders: Order[];
  static instance: OrderRepository;

  private constructor() {
    this.orders = [];
  }

  static getInstance() {
    if (!OrderRepositoryMemory.instance) OrderRepositoryMemory.instance = new OrderRepositoryMemory();
    return OrderRepositoryMemory.instance;
  }

  async get(code: string): Promise<Order> {
    const order = this.orders.find(order => order.code.value === code);
    if (!order) throw new Error("Order not found");
    return order;
  }

  async count(): Promise<number> {
    return this.orders.length;
  }

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async clean(): Promise<void> {
    this.orders = [];
  }
}