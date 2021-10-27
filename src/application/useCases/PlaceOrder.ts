import Order from "../../domain/entities/Order";
import ItemRepository from "../../domain/repositories/ItemRepository";
import OrderRepository from "../../domain/repositories/OrderRepository";
import { PlaceOrderInput, PlaceOrderOutput } from "../dtos/PlaceOrderDTO";

export default class PlaceOrder {

  constructor(readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository) {};

  execute({clientDocumentNumber, items}: PlaceOrderInput): PlaceOrderOutput {
    const order = new Order(clientDocumentNumber);
    items.forEach(item => {
      const foundItem = this.itemRepository.findById(item.id);
      order.addItem(foundItem, item.quantity);
    });
    order.setOrderId(this.nextOrderId());
    this.orderRepository.save(order);
    return {id: order.getOrderId(), total: order.getTotal()}
  }

  private nextOrderId(): string {
    const nextOrderAsString = (this.orderRepository.registryCount() + 1).toString();
    const nextOrderId = nextOrderAsString.padStart(8, '0');
    const currentYear = new Date().getFullYear();
    return `${currentYear}${nextOrderId}`
  }
}
