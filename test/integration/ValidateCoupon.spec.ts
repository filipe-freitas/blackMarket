import ValidateCoupon from "../../src/application/useCases/ValidateCoupon";

describe('Validate a coupon', () => {
  let validateCoupon: ValidateCoupon;
  
  beforeEach(() => {
    validateCoupon = new ValidateCoupon();
  });
  
  it('should be able to validate a coupon', () => {
    expect(validateCoupon.execute('QUEIMATUTO')).toBeFalsy();
    expect(validateCoupon.execute('QUEIMATUDO')).toBeTruthy();
  });

  it('should not be able to validate an unexisting coupon', () => {
    expect(validateCoupon.execute('EITAFERRO')).toBeFalsy();
  })

  it('should not be able to validate an expired coupon', () => {
    expect(validateCoupon.execute('VALE50')).toBeFalsy();
  })
});
