import Coupon from "./Coupon";

describe('Utilizing a coupon', () => {
  it('should validate a non-expired coupon', () => {
    const coupon = new Coupon('VALE5', 5, new Date(2021, 9, 14));
    expect(coupon.isValid(new Date(2021, 9, 13))).toBeTruthy();
  });

  it('should not validate an expired coupon', () => {
    const coupon = new Coupon('VALE10', 10, new Date(2021, 9, 12));
    expect(coupon.isValid(new Date(2021, 9, 13))).toBeFalsy();
  });

  it('should validate a non-expiring cupon', () => {
    const coupon = new Coupon('VALE2', 2);
    expect(coupon.isValid(new Date(2021, 9, 13))).toBeTruthy();
  });
});