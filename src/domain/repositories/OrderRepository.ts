import Order from "../entities/Order";

interface OrderRepository {
  findById(orderId: string): Promise<Order | null>;
  save(order: Order): void;
  registryCount(): Promise<number>;
}

export { OrderRepository }
