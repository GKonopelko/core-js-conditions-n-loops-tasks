/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.y - king.y) === Math.abs(queen.x - king.x)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || b <= 0) return false;
  const result =
    (a === b && a + b > c) || (b === c && b + c > a) || (c === a && a + c > b);
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num >= 40) return `XL${convertToRomanNumerals(num - 40)}`;
  if (num >= 10) return `X${convertToRomanNumerals(num - 10)}`;
  if (num === 9) return `IX`;
  if (num >= 5) return `V${convertToRomanNumerals(num - 5)}`;
  if (num === 4) return `IV`;
  if (num >= 1) return `I${convertToRomanNumerals(num - 1)}`;
  if (num <= 0) return '';
  return 0;
}

// console.log(convertToRomanNumerals(10));

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let word = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '.':
        word = 'point';
        break;
      case ',':
        word = 'point';
        break;
      case '-':
        word = 'minus';
        break;
      case '+':
        word = 'plus';
        break;
      default:
        word = '?';
    }
    if (numberStr.length === 1) return word;
    if (i === numberStr.length - 1) {
      return `${result}${word}`;
    }
    result = `${result}${word} `;
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num} + ''`;
  for (let i = 0; i <= str.length; i += 1) {
    if (`${str[i]} + 'a'` === `${digit} + 'a'`) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left = 0;
  let r = 0;
  if (arr.length === 3 && arr[0] === arr[2]) {
    return 1;
  }
  for (let i = 1; i < arr.length; i += 1) {
    r += arr[i];
  }
  for (let j = 0, k = 1; k < arr.length; j += 1, k += 1) {
    left += arr[j];
    r -= arr[k];
    if (left === r) return j + 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arrSize = size * size;
  let counter = 1;
  const arr = [];
  let rowStart = 0;
  let rowEnd = size - 1;
  let colomnStart = 0;
  let colomnEnd = size - 1;

  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = '';
    }
  }
  while (counter <= arrSize) {
    for (let i = colomnStart; i <= colomnEnd; i += 1) {
      arr[rowStart][i] = counter;
      counter += 1;
    }
    rowStart += 1;
    for (let i = rowStart; i <= rowEnd; i += 1) {
      arr[i][colomnEnd] = counter;
      counter += 1;
    }
    colomnEnd -= 1;
    for (let i = colomnEnd; i >= colomnStart; i -= 1) {
      arr[rowEnd][i] = counter;
      counter += 1;
    }
    rowEnd -= 1;
    for (let i = rowEnd; i >= rowStart; i -= 1) {
      arr[i][colomnStart] = counter;
      counter += 1;
    }
    colomnStart += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
// function rotateMatrix(matrix) {
//   const arr = [];
//   const rows = matrix[0].length;
//   const cols = matrix.length;
//   for (let x = 0; x < rows; x += 1) {
//     const rowArr = [];
//     for (let y = cols - 1, z = 0; y >= 0; y -= 1, z += 1) {
//       rowArr[z] = matrix[y][x];
//     }
//     arr[x] = rowArr;
//   }
//   return arr;
// }

function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      result[i][j] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      newMatrix[j][result.length - 1 - i] = result[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr, left, right) {
  let index;
  let l = left;
  let r = right;
  const temp = arr;

  function partition() {
    const pivot = arr[Math.floor((l + r) / 2)];
    let i = l;
    let j = r;
    while (i <= j) {
      while (arr[i] < pivot) {
        i += 1;
      }
      while (arr[j] > pivot) {
        j -= 1;
      }
      if (i <= j) {
        [temp[i], temp[j]] = [temp[j], temp[i]];
        i += 1;
        j -= 1;
      }
    }
    return i;
  }

  if (arr.length > 1) {
    l = typeof l !== 'number' ? 0 : l;
    r = typeof right !== 'number' ? arr.length - 1 : r;
    index = partition(arr, l, r);
    if (l < r - 1) {
      sortByAsc(arr, l, index - 1);
    }
    if (index < r) {
      sortByAsc(arr, index, r);
    }
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let str1 = str;
  let item = iterations;
  let { length } = str.length;
  if (length % 2 !== 0) {
    length += 1;
  }
  if (item === length / 2) {
    return str;
  }
  if (item > length / 2) {
    item = (item % length) / 2;
  }
  while (item > 0) {
    let result1 = '';
    let result2 = '';
    item -= 1;
    for (let i = 0; i < str1.length; i += 2) {
      if (str[i]) {
        result1 += str1[i];
      }
      if (str[i + 1]) {
        result2 += str1[i + 1];
      }
    }
    str1 = result1 + result2;
  }
  return str1;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function getNearestBigger(number) {
  const str = `${number}`;
  let smallerDigit;
  let greaterDigit;
  const lastElementIndex = str.length - 1;

  const arr = Array.from(str).reverse();

  for (let i = 0; i < lastElementIndex; i += 1) {
    if (arr[i] > arr[i + 1]) {
      smallerDigit = i + 1;
      break;
    }
  }

  if (smallerDigit === undefined) {
    return str;
  }

  if (smallerDigit === 1) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
    return arr.reverse().join('') / 1;
  }

  greaterDigit = smallerDigit - 1;
  for (let i = greaterDigit; i > 0; i -= 1) {
    if (arr[i - 1] < arr[i] && arr[i - 1] > arr[smallerDigit]) {
      greaterDigit = i - 1;
    }
  }

  [arr[greaterDigit], arr[smallerDigit]] = [
    arr[smallerDigit],
    arr[greaterDigit],
  ];

  const removed = arr.splice(smallerDigit).reverse();

  return (removed.join('') + arr.sort().join('')) / 1;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
