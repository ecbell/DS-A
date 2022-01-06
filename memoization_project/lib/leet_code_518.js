// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.


function change(amount, coins, memo={}) {
  let key = amount + '-' + coins;
  if (key in memo) return memo[key]
  
  if (amount === 0) return 1;

  let currCoin = coins[coins.length - 1];

  let total = 0;
  for(let qty=0; qty * currCoin <= amount; qty++) {
    total += change(amount - (qty * currCoin), coins.slice(0, -1));
  }

  memo[key] = total;
  return memo[key]
}
