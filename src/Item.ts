export default class Item {

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
}