export default class Item {
  readonly MINIMUM_FREIGHT_PRICE = 10;
  readonly DISTANCE = 1000;

  constructor(
    readonly id: string,
    readonly description: string,
    readonly price: number,
    readonly weight: number = 0,
    readonly height: number = 0,
    readonly width: number = 0,
    readonly depth: number = 0) {}

  getVolume() {
    return this.height/100 * this.width/100 * this.depth/100;
  }

  getDensity() {
    return parseFloat((this.weight/this.getVolume()).toPrecision(5));
  }

  getFreightValue(): number {
    const volume = this.getVolume();
    const density = this.getDensity();
    const freightValue = volume * (density/100) * this.DISTANCE;
    return (freightValue < this.MINIMUM_FREIGHT_PRICE)
      ? this.MINIMUM_FREIGHT_PRICE
      : parseFloat(freightValue.toPrecision(2));
  }
}