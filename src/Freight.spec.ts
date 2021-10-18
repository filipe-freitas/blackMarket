import Freight from "./Freight";

describe('Freight calculation', () => {
  it('should calculate the freight value correctly', () => {
    const freight = new Freight(1000, 3, 100, 30, 10);
    const freightValue = freight.getFreightValue(freight.distance);
    expect(freightValue).toBe(30);
  });

  it('should return the a minimum value in case the freight calculation is below it', () => {
    const freight = new Freight(1000, 1, 20, 15, 10);
    const freightValue = freight.getFreightValue(freight.distance);
    expect(freightValue).toBe(10);
  });
});