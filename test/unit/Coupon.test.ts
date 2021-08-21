import Coupon from "../../src/Coupon";

test("Should verify if coupon has expired", function () {
  const coupon = new Coupon("VALE20", 20, new Date ("2020-10-10"));
  expect(coupon.isExpired()).toBeTruthy();
});