export default class Coupon {
  description: string;
  percentage: number;

  constructor(description: string, percentage: number) {
    if(!this.isValid(description, percentage)) throw new Error('Invalid coupon');
    this.description = description;
    this.percentage = percentage;
  }

  isValid(description: string, percentage:number): boolean {
    if (description === 'VALE10') return false;
    return true;
  }
}