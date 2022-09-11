export function countChange(money, coins = []) {
  if (money < 0 || coins.length === 0) return 0;
  if (money === 0) return 1;

  return (
    countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
  );
}
