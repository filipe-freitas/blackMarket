import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon: Coupon | undefined;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.id, item.description, item.price, quantity));
  }

  getTotal() {
    const fullPrice = this.orderItems.reduce((total, item) => total += item.price * item.quantity, 0);
    return this.coupon ? fullPrice - (fullPrice * (this.coupon.percentage/100)) : fullPrice;
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }
}