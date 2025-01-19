/**
 * @param {number} numberOfDays
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalBasePrice = numberOfDays * PRICE_PER_DAY;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return totalBasePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM_DAYS) {
    return totalBasePrice - SHORT_TERM_DISCOUNT;
  }

  return totalBasePrice;
}

module.exports = calculateRentalCost;
