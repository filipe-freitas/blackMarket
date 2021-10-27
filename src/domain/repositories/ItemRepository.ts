import Item from "../entities/Item";

export default interface ItemRepository {
  findById(itemId: string): Item;
  save(item: Item): void;
}
