import Coupon from "../../../domain/entities/Coupon";
import CouponRepository from "../../../domain/repositories/CouponRepository";

export default class CouponRepositoryMemory implements CouponRepository {
  private couponRepository: Coupon[] = [
    new Coupon('VALE10', 10),
    new Coupon('VALE20', 20),
    new Coupon('QUEIMATUDO', 100),
    new Coupon('VALE50', 50, new Date(2021, 7, 31))
  ];

  async findById(couponDescription: string): Promise<Coupon | null> {
    const foundCoupon = this.couponRepository.find(coupon => coupon.description === couponDescription);
    return foundCoupon ?? null;
  }

  save(coupon: Coupon): void {
    this.couponRepository.push(coupon);
  }

}
