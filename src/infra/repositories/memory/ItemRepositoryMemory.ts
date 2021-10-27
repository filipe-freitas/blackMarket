import Item from "../../../domain/entities/Item";
import ItemRepository from "../../../domain/repositories/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
  private itemRepository: Item[] = [
    new Item('1', 'Câmera', 700, 1, 20, 15, 10),
    new Item('2', 'Guitarra', 1200, 3, 100, 30, 10),
    new Item('3', 'Geladeira', 4600, 40, 200, 100, 50)
  ];

  findById(itemId: string): Item {
    const foundItem = this.itemRepository.find(item => item.id === itemId);
    if(!foundItem) throw new Error('Item not found');
    return foundItem;
  }
  save(item: Item): void {
    this.itemRepository.push(item);
  }

}
