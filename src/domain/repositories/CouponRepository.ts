import Coupon from "../entities/Coupon";

export default interface CouponRepository {
  findByCode(couponCode: string): Promise<Coupon | null>;
  save(coupon: Coupon): void;
}
