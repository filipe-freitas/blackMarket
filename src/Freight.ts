export default class Freight {
  readonly distance: number;
  readonly weight: number;
  readonly height: number;
  readonly width: number;
  readonly depth: number;

  constructor(distance: number, weight: number, height: number, width: number, depth: number) {
    this.distance = distance;
    this.weight = weight;
    this.height = height;
    this.width = width;
    this.depth = depth;
  }

  getFreightValue(distance: number): number {
    const volume = this.calculateVolume();
    const density = this.calculateDensity(volume);
    const freightValue = distance * volume * (density/100);
    return freightValue;
  }

  calculateVolume(): number {
    const volume = (this.height * this.width * this.depth) / 1000000;
    return volume;
  }

  calculateDensity(volume: number): number {
    const density = this.weight / volume;
    return density;
  }
}