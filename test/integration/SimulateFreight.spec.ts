import SimulateFreight from "../../src/application/useCases/SimulateFreight";
import ItemRepositoryMemory from "../../src/infra/repositories/memory/ItemRepositoryMemory";

describe('Simulate Freight', () => {
  let simulateFreight: SimulateFreight;

  beforeEach(() => {
    const itemRepository = new ItemRepositoryMemory();
    simulateFreight = new SimulateFreight(itemRepository);
  });

  it('should be able to simulate a freight', () => {
    const freightValue = simulateFreight.execute('2');
    expect(freightValue).toBe(30);
  });

  it('should not be able to simulate a freight with an unexisting item', () => {
    expect(() => simulateFreight.execute('')).toThrowError('Item not found');
  });

  it('should not be able to simulate a freight with an unexisting item', () => {
    expect(() => simulateFreight.execute('22')).toThrowError('Item not found');
  });
});
