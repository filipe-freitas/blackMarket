export default class OrderItem {
  id: string;
  description: string;
  price: number;
  quantity: number;

  constructor(id: string, description: string, price: number, quantity: number){
    this.id = id;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}