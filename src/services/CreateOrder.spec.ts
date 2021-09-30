import CreateOrderService from "./CreateOrderService";

let createOrder: CreateOrderService

describe('CreateOrder', () => {
  beforeEach(() => {
    createOrder = new CreateOrderService();
  });

  it('should not be able to create an order with an invalid document number', () => {
    expect(() => createOrder.execute({
      userDocument: '123',
      products: [{
        id: '1',
        description: 'Product1',
        quantity: 2,
        price: 3,
      }],
      discountValue: 2,
    })).toThrow(new Error('Número de documento do usuário inválido'));

    expect(() => createOrder.execute({
      userDocument: '935.411.347-80',
      products: [{
        id: '1',
        description: 'Product2',
        quantity: 2,
        price: 3,
      }],
      discountValue: 2,
    })).toBeTruthy();
  });
  
  it('should be able to create an order with three products', () => { /* com descrição, preço e quantidade */
    expect(() => createOrder.execute({
      userDocument: '935.411.347-80',
      products: [{
        id: '1',
        description: 'Product1',
        quantity: 2,
        price: 3,
      }, {
        id: '2',
        description: 'Product2',
        quantity: 2,
        price: 3,
      }, {
        id: '3',
        description: 'Product3',
        quantity: 2,
        price: 3,
      }],
      discountValue: 0
    })).toBeTruthy();
  });
  
  it('should be able to create an order with discount', () => { /* percentual sobre o total do pedido */
    const order = createOrder.execute({
      userDocument: '935.411.347-80',
      products: [{
        id: '1',
        description: 'Product1',
        quantity: 4,
        price: 8,
      }],
      discountValue: 10
    });
    expect(order.totalPrice).toBe(22);
  });
});