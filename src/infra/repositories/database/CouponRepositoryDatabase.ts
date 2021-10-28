import Coupon from "../../../domain/entities/Coupon";
import CouponRepository from "../../../domain/repositories/CouponRepository";
import DatabaseConnection from "../../databases/DatabaseConnection";

export default class CouponRepositoryDatabase implements CouponRepository {
  constructor(readonly databaseConnection: DatabaseConnection) {}

  async findByCode(couponCode: string): Promise<Coupon | null> {
    const [foundCoupon] = await this.databaseConnection.query("SELECT * FROM COUPON WHERE COUPON.DESCRIPTION = $1", [couponCode]);
    return foundCoupon ? new Coupon(foundCoupon.description, foundCoupon.percentage, foundCoupon.expiringdate) : null;
  }

  save(coupon: Coupon): void {
    throw new Error("Method not implemented.");
  }
}
