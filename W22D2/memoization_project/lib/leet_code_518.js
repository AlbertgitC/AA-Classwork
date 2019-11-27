// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins, memo = {}) {
  const key = amount + "-" + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let ways = 0;
  for (let i = 0; i * coins[coins.length - 1] <= amount; i++) {
    ways += change(amount - i * coins[coins.length - 1], coins.slice(0, coins.length - 1), memo);
  }

  memo[key] = ways;
  return memo[key];
}
