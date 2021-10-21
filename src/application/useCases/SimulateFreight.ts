import Item from "../../domain/entities/Item";

export default class SimulateFreight {
  private itemRepository: Item[] = [
    new Item('1', 'Câmera', 700, 1, 20, 15, 10),
    new Item('2', 'Guitarra', 1200, 3, 100, 30, 10),
    new Item('3', 'Geladeira', 4600, 40, 200, 100, 50)
  ];

  constructor() {};

  execute(itemId: string) {
    if(!itemId) throw new Error('Item does not exist');
    const foundItem = this.itemRepository.find(item => item.id === itemId);
    if(!foundItem) throw new Error('Item does not exist');
    return foundItem.getFreightValue();
  }
}
