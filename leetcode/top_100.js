//reverse integer

// /**
//  * @param {number} x
//  * @return {number}
//  */
var reverse = function (x) {
  let isNegative = false;

  if (x < 0) {
    isNegative = true;
  }

  let toArr = x.toString().split('');

  let start = 0;
  let end = toArr.length - 1;

  while (start < end) {
    let temp = toArr[start];
    toArr[start] = toArr[end];
    toArr[end] = temp;

    start++;
    end--;
  }

  let reversed = parseInt(toArr.join(''));
  if (reversed > Math.pow(2, 31)) return 0;
  if (isNegative) reversed = reversed * -1;
  return reversed;

};


// valid sudoku
var isValidSudoku = function (board) {

  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true

};


// count min coin combo
var coinChange = function (coins, amount) {

  let countCoins = new Array(amount + 1).fill(Infinity);
  // [0, 1, 1, 2, 2, 1, 2, 3, 3, 3, 2, 3 ]
  countCoins[0] = 0;

  for (let i = 1; i <= amount; i++) { // i = 8
    for (const coin of coins) { // coin = 2
      if (i - coin >= 0) {
        countCoins[i] = Math.min(countCoins[i], countCoins[i - coin] + 1);
      }
    }
  }

  return countCoins[amount] === Infinity ? -1 : countCoins[amount];
};

//permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (letters) {
  let res = []; // results
  let usedArr = Array(letters.length).fill(false);
  dfs(letters, [], usedArr, res); // outside DFS function to get permutations
  return res; // return result
}

function dfs(letters, path, used, res) { //[1]
  if (path.length == letters.length) { // 3  eq to 3
    // make a deep copy since otherwise we'd be append the same list over and over
    res.push(Array.from(path));
    return;
  }

  for (let i = 0; i < letters.length; i++) { // i = 1;
    // skip used letters
    if (used[i]) continue; // if letter is true in used arr, don't add

    // add letter to permutation, mark letter as used
    path.push(letters[i]); // otherwise, add letter to path. [1], [2]
    used[i] = true; // [false, true, false]
    dfs(letters, path, used, res); // [1,2,3]

    // remove letter from permutation, mark letter as unused
    path.pop(); // []
    used[i] = false; //[false,false,false]
  }
}