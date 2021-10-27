import Order from "../entities/Order";

export default interface OrderRepository {
  findById(orderId: string): Order;
  save(order: Order): void;
  registryCount(): number;
}
