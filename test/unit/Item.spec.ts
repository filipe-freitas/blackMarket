import Item from "../../src/domain/entities/Item";

describe('should test items', () => {
  it('should be able to recover volume, density and freight from an item', () => {
    const item1 = new Item('1', 'Câmera', 700, 1, 20, 15, 10);
    const item2 = new Item('2', 'Guitarra', 1200, 3, 100, 30, 10);
    const item3 = new Item('3', 'Geladeira', 4600, 40, 200, 100, 50);
    
    expect(item1.getVolume()).toBe(0.003);
    expect(item1.getDensity()).toBe(333.33);
    expect(item1.getFreightValue()).toBe(10);
    
    expect(item2.getVolume()).toBe(0.03);
    expect(item2.getDensity()).toBe(100);
    expect(item2.getFreightValue()).toBe(30)

    expect(item3.getVolume()).toBe(1);
    expect(item3.getDensity()).toBe(40);
  });
});
