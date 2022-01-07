// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
  // 1 2 3
  // 4 5 6
  // [[1,2,3],[4,5,6]] end is grid[1][2]

  let start = grid[0][0];
  let m = grid.length;
  let n = grid[0].length;
  let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
  table[0][0] = grid[0][0]

  for (let i = 0; i < m; i++) { // 2
    for (let j = 0; j < n; j++) {  //3
      if (j < n - 1) {
        table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1]);
      }
      if (i < m - 1) {
        table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j]);
      }

    }
  }

  return table[m - 1][n - 1];
}