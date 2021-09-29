import Order from "../entities/order";
import OrderProducts from "../entities/orderProducts";
import Product from "../entities/product";
import User from "../entities/user";
import CreateOrderService from "./CreateOrderService";

// let users:User[] = [];
// let products:Product[] = [];

let createOrder: CreateOrderService

describe('CreateOrder', () => {
  beforeEach(() => {
    // let user:User = new User();
    // user.id = '1';
    // user.name = 'John Doe';
    // user.password = '123';
    // user.documentNumber = '2';
    // user.zipCode = '0000';
    
    // users.push(user);

    // let product:Product = new Product();
    // product.id = '1';
    // product.name = 'Playstation 5';
    // product.description = 'videogame';
    // product.price = 2470;
    // product.taxPrice = 2122;
    // product.totalPrice = product.price + product.taxPrice;

    // products.push(product);

    createOrder = new CreateOrderService();
  });

  it('should not be able to create an order with an invalid document number', async () => {
    // let orderProducts:OrderProducts[] = [];
    // let orders:Order[] = [];
  
    // let order = new Order();
    // order.id = '1';
    // order.user = users.find(user => user.id === '1');
    // order.orderPrice = 4592;
    // order.orderDiscount = 0;
    // order.shippingPrice = 27;
    // order.totalPrice = 4619;
  
    // let orderProduct = new OrderProducts();
    // orderProduct.id = '1';
    // orderProduct.order = '1';
    // orderProduct.product = '1';
    // orderProduct.price = 4592;
    // orderProduct.quantity = 1;
  
    await expect(createOrder.execute({
      userDocument: '123',
      products: [{
        productId: '1',
        productQty: 2,
        productPrice: 3,
      }],
      discountValue: 2,
    })).rejects.toThrow();

    expect(createOrder.execute({
      userDocument: '935.411.347-80',
      products: [{
        productId: '1',
        productQty: 2,
        productPrice: 3,
      }],
      discountValue: 2,
    })).toBeTruthy();
  });
  
  it('should be able to create an order with three products', () => { /* com descrição, preço e quantidade */
    expect(createOrder.execute({
      userDocument: '935.411.347-80',
      products: [{
        productId: '1',
        productQty: 2,
        productPrice: 3,
      }, {
        productId: '2',
        productQty: 1,
        productPrice: 2,
      }, {
        productId: '3',
        productQty: 1,
        productPrice: 7,
      }],
      discountValue: 0
    })).toBeTruthy();
  });
  
  it('should be able to create an order with discount', async () => { /* percentual sobre o total do pedido */
    let order = await createOrder.execute({
      userDocument: '935.411.347-80',
      products: [{
        productId: '1',
        productQty: 4,
        productPrice: 8,
      }],
      discountValue: 10
    });
    
    console.log(order.totalPrice);

    expect(order.totalPrice).toBe(22);
  });
});