// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  if (n < 2) return 1;
  let table = new Array(n);
  table[0] = 1;
  table[1] = 1;
  for(let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[table.length - 1];
}