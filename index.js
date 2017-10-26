/**
 * @file Converts a value to Uint24.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-uint-24-x
 */

'use strict';

var toNumber = require('to-number-x').toNumber2018;
var modulo = require('modulo-x');
var sign = require('math-sign-x').sign2018;
var numberIsFinite = require('is-finite-x');

/**
 * The abstract operation ToUint24 converts argument to one of 2^24 integer
 * values in the range 0 through 2^24-1, inclusive.
 *
 * @param {number} argument - The argument to convert to one of 2^24 integers.
 * @returns {number} Integer value, 0 through 2^24-1, inclusive.
 * @example
 * var toUint24 = require('to-uint-24-x');
 * toUint24(1); // 1
 * toUint24(-1); // 16777215 (2^24-1)
 */
module.exports = function toUint24(argument) {
  // Let number be ? ToNumber(argument).
  var number = toNumber(argument);

  // If number is NaN, +0, -0, +∞, or -∞, return +0.
  if (number === 0 || numberIsFinite(number) === false) {
    return 0;
  }

  // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  // Let int24bit be int modulo 2^24.
  return modulo(sign(number) * Math.floor(Math.abs(number)), 0x1000000);
};
