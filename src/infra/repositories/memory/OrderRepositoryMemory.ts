import Order from "../../../domain/entities/Order";
import OrderRepository from "../../../domain/repositories/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
  private orderRepository: Order[] = [];

  findById(orderId: string): Order {
    const foundOrder = this.orderRepository.find(order => order.getOrderId() === orderId);
    if(!foundOrder) throw new Error('Order not found');
    return foundOrder;
  }

  save(order: Order): void {
    this.orderRepository.push(order);
  }
  registryCount(): number {
    return this.orderRepository.length;
  }

}
