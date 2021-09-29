import User from "./user";

class Order {
  id: string;
  user: User;
  orderPrice: number
  orderDiscount: number;
  shippingPrice: number;
  totalPrice: number;
}

export default Order;