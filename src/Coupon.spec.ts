import Coupon from "./Coupon";

describe('Utilizing a coupon', () => {
  it('should not validate an expired coupon', () => {
    expect(() => new Coupon('VALE5', 5)).toBeTruthy();
    expect(() => new Coupon('VALE10', 10)).toThrowError('Invalid coupon');
  });
});