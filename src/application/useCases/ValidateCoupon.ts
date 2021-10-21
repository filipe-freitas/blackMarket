import Coupon from "../../domain/entities/Coupon";

export default class ValidateCoupon {
  private couponRepository: Coupon[] = [
    new Coupon('VALE10', 10),
    new Coupon('VALE20', 20),
    new Coupon('QUEIMATUDO', 100),
    new Coupon('VALE50', 50, new Date(2021, 7, 31))
  ];

  constructor() {};

  execute(couponDescription: string): boolean {
    if(!couponDescription) return false;
    const foundCoupon = this.couponRepository.find(coupon => coupon.description === couponDescription);
    if(!foundCoupon) return false;
    return foundCoupon.isValid();
  }
}
