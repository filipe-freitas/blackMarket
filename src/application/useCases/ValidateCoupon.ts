import CouponRepository from "../../domain/repositories/CouponRepository";

export default class ValidateCoupon {

  constructor(readonly couponRepository: CouponRepository) {};

  async execute(couponDescription: string): Promise<boolean> {
    if(!couponDescription) return false;
    const foundCoupon = await this.couponRepository.findById(couponDescription);
    if(!foundCoupon) return false;
    return foundCoupon.isValid();
  }
}
