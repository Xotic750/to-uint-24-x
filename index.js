/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/toUint24-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/toUint24-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/toUint24-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/toUint24-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/toUint24-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/toUint24-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/toUint24-x" title="npm version">
 * <img src="https://badge.fury.io/js/toUint24-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Converts a value to Uint24 module.
 *
 * Requires ES3 or above.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module toUint24-x
 */

'use strict';

var modulo = require('modulo-x');
var sign = require('math-sign-x');
var numberIsFinite = require('is-finite-x');

var toUint24 = function _toUint24(argument) {
  // Let number be ? ToNumber(argument).
  var number = Number(argument);
  // If number is NaN, +0, -0, +∞, or -∞, return +0.
  if (number !== number || number === 0 || !numberIsFinite(number)) {
    return 0;
  }
  // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  var integer = sign(number) * Math.floor(Math.abs(number));
  // Let int24bit be int modulo 2^24.
  return modulo(integer, 0x1000000);
};

/**
 * The abstract operation ToUint16 converts argument to one of 2^24 integer
 * values in the range 0 through 2^24-1, inclusive.
 *
 * @param {number} argument The argument to convert to one of 2^24 integers.
 * @return {number} Integer value, 0 through 2^24-1, inclusive.
 * @example
 * var toUint24 = require('toUint24-x');
 * toUint24(1); // 1
 * toUint24(-1); // 16777215 (2^24-1)
 */
module.exports = toUint24;
