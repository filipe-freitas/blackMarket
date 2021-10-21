import Item from "../../domain/entities/Item";
import Order from "../../domain/entities/Order";
import PlaceOrderDTO from "../dtos/PlaceOrderDTO";

export default class PlaceOrder {
  private itemRepository: Item[] = [
    new Item('1', 'Ryzen 5600X', 1800),
    new Item('2', 'Corsair Dominator 32GB (4x8GB) 3200MHz', 1500),
    new Item('3', 'TUF X570', 1620)
  ];

  private orderRepository: Order[] = [];

  constructor() {};

  execute({clientDocumentNumber, items}: PlaceOrderDTO): any {
    const order = new Order(clientDocumentNumber);
    items.forEach(item => {
      const foundItem = this.itemRepository.find(itemRepository => itemRepository.id === item.id);
      if (!foundItem) throw new Error('Item not found');
      order.addItem(foundItem, item.quantity);
    });
    order.setOrderId(this.nextOrderId());
    this.orderRepository.push(order);
    return {id: order.getOrderId(), total: order.getTotal()}
  }

  private nextOrderId(): string {
    const nextOrderAsString = (this.orderRepository.length + 1).toString();
    const nextOrderId = nextOrderAsString.padStart(8, '0');
    const currentYear = new Date().getFullYear();
    return `${currentYear}${nextOrderId}`
  }
}
