export default class Coupon {

  constructor(readonly description: string, readonly percentage: number, readonly expiringDate?: Date) {
  }

  isValid(today: Date = new Date()): boolean {
    if (this.expiringDate && this.expiringDate < today) return false;
    return true;
  }
}
