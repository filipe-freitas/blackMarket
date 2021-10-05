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

    console.log(`Frete: ${freightValue}`);

    return freightValue;
  }

  calculateVolume(): number {
    const volume = (this.height * this.width * this.depth) / 1000000;
    console.log(`Volume: ${volume}`);
    return volume;
  }

  calculateDensity(volume: number): number {
    const density = this.weight / volume;
    console.log(`Densidade: ${density}`);
    return density;
  }
}