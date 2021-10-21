import SimulateFreight from "../../src/application/useCases/SimulateFreight";

describe('Simulate Freight', () => {
  let simulateFreight: SimulateFreight;

  beforeEach(() => {
    simulateFreight = new SimulateFreight();
  });

  it('should be able to simulate a freight', () => {
    const freightValue = simulateFreight.execute('2');
    expect(freightValue).toBe(30);
  });

  it('should not be able to simulate a freight with an unexisting item', () => {
    expect(() => simulateFreight.execute('')).toThrowError('Item does not exist');
  });

  it('should not be able to simulate a freight with an unexisting item', () => {
    expect(() => simulateFreight.execute('22')).toThrowError('Item does not exist');
  });
});
