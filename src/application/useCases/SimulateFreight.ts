import ItemRepository from "../../domain/repositories/ItemRepository";

export default class SimulateFreight {
  
  constructor(readonly itemRepository: ItemRepository) {};

  execute(itemId: string): number {
    if(!itemId) throw new Error('Item not found');
    const foundItem = this.itemRepository.findById(itemId);
    return foundItem.getFreightValue();
  }
}
