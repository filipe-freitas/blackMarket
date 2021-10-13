import Order from './Order';
import Item from './Item';
import Coupon from './Coupon';

describe('Create an Order', () => {
  it('should not be able to create an order with an invalid document number', () => {
    expect(() => new Order(
      '123',
    )).toThrowError('Invalid CPF number');

    expect(() => new Order(
      '935.411.347-80',
    )).toBeTruthy();
  });

  it('should be able to create an order with three products', () => {
    /* com descrição, preço e quantidade */
    const order = new Order('935.411.347-80');
    order.addItem(new Item('1', 'Ryzen 5600X', 1700), 1);
    order.addItem(new Item('2', 'Corsair Dominator 32GB (4x8GB) 3200MHz', 1800), 1);
    order.addItem(new Item('3', 'TUF X570', 1620), 1);
    const total = order.getTotal();
    expect(total).toBe(5120);
  });

  it('should be able to create an order with discount', () => {
    /* percentual sobre o total do pedido */
    const order = new Order('935.411.347-80');
    order.addItem(new Item('4', 'Playstation 5', 5000), 1);
    order.addCoupon(new Coupon('JN10', 10));
    const total = order.getTotal();
    expect(total).toBe(4500);
  });

  it('should be able to create an order with an invalid discount coupon', () => {
    /* percentual sobre o total do pedido */
    const order = new Order('935.411.347-80');
    order.addItem(new Item('4', 'Playstation 5', 5000), 1);
    order.addCoupon(new Coupon('JN10', 10, new Date(2021, 9, 10)));
    const total = order.getTotal();
    expect(total).toBe(5000);
  });
});