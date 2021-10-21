import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  private cpf: Cpf;
  private orderItems: OrderItem[];
  private coupon: Coupon | undefined;
  private freigth: number = 0;
  private id: string;

  constructor(cpf: string, readonly issueDate: Date = new Date()) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number) {
    this.freigth += item.getFreightValue() * quantity;
    this.orderItems.push(new OrderItem(item.id, item.description, item.price, quantity));
  }

  getFreight() {
    return this.freigth;
  }

  getTotal() {
    const fullPrice = this.orderItems.reduce((total, item) => total += item.price * item.quantity, 0);
    return this.coupon ? fullPrice - (fullPrice * (this.coupon.percentage/100)) : fullPrice;
  }

  setOrderId(id: string) {
    if(!id.match(/^\d+$/)) throw new Error('Invalid id')
    this.id = id;
  }

  getOrderId() {
    return this.id;
  }

  addCoupon(coupon: Coupon) {
    if (!coupon.isValid(this.issueDate)) return;
    this.coupon = coupon;
  }
}
