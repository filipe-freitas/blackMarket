import ValidateCoupon from "../../src/application/useCases/ValidateCoupon";
import CouponRepositoryMemory from "../../src/infra/repositories/memory/CouponRepositoryMemory";

describe('Validate a coupon', () => {
  let validateCoupon: ValidateCoupon;
  
  beforeEach(() => {
    //const couponRepository = new CouponRepositoryMemory();
    validateCoupon = new ValidateCoupon(couponRepository);
  });
  
  it('should be able to validate a coupon', async () => {
    expect(await validateCoupon.execute('QUEIMATUTO')).toBeFalsy();
    expect(await validateCoupon.execute('QUEIMATUDO')).toBeTruthy();
  });

  it('should not be able to validate an unexisting coupon', async () => {
    expect(await validateCoupon.execute('EITAFERRO')).toBeFalsy();
  });

  it('should not be able to validate an expired coupon', async () => {
    expect(await validateCoupon.execute('VALE50')).toBeFalsy();
  });
});
