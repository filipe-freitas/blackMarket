import Item from "../entities/Item";

interface ItemRepository {
  findById(itemId: string): Promise<Item | null>;
  save(item: Item): void;
}

export { ItemRepository }
