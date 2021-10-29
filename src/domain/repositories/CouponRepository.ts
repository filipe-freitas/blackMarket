import Coupon from "../entities/Coupon";

interface CouponRepository {
  findByCode(couponCode: string): Promise<Coupon | null>;
  save(coupon: Coupon): void;
}

export { CouponRepository }
