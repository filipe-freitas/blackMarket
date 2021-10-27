import PlaceOrder from "../../src/application/useCases/PlaceOrder";
import ItemRepositoryMemory from "../../src/infra/repositories/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repositories/memory/OrderRepositoryMemory";

describe('Integration tests for placing an order', () => {
  let placeOrder: PlaceOrder;

  beforeEach(() => {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    placeOrder = new PlaceOrder(itemRepository, orderRepository);
  });

  it('should be able to place an order', () => {
    const order = placeOrder.execute({
      clientDocumentNumber: '392.677.988-80',
      items: [{
        id: '1',
        quantity: 1
      }, {
        id: '2',
        quantity: 1
      }, {
        id: '3',
        quantity: 1
      }]
    });
    expect(order.total).toBe(6500);
  });


  it('should be able to create an order id', () => {
    const firstOrder = placeOrder.execute({
      clientDocumentNumber: '392.677.988-80',
      items: [{
        id: '1',
        quantity: 1
      }]
    });

    placeOrder.execute({
      clientDocumentNumber: '392.677.988-80',
      items: [{
        id: '2',
        quantity: 2
      }]
    });

    const thirdOrder = placeOrder.execute({
      clientDocumentNumber: '392.677.988-80',
      items: [{
        id: '3',
        quantity: 3
      }]
    });

    expect(firstOrder.id).toBe('202100000001');
    expect(thirdOrder.id).toBe('202100000003');
  });
});
