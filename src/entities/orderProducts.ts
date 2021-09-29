import Order from "./order";
import Product from "./product";

class OrderProducts {
  id: string;
  order: Order;
  product: Product;
  quantity: number;
  price: number;
}

export default OrderProducts;