// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  let table = new Array(n + 1).fill(0);
  table[1] = 1
  table[0] = 1

  for (let i = 1; i < table.length; i++) {

    if (2 <= n - i) {
      table[i + 1] += table[i] + table[i - 1];
    } else if (1 >= n - i && n - i !== 0) {
      table[i + 1] += table[i] + table[i - 1]
    }
  }
  return table[n]
  
}