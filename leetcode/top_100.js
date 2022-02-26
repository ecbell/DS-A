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


