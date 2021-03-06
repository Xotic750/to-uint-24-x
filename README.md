<a
  href="https://travis-ci.org/Xotic750/to-uint-24-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-uint-24-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/to-uint-24-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-uint-24-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-uint-24-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-uint-24-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/to-uint-24-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-uint-24-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/to-uint-24-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-uint-24-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/to-uint-24-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/to-uint-24-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/to-uint-24-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/to-uint-24-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_to-uint-24-x"></a>

## to-uint-24-x

Converts a value to Uint24.

<a name="exp_module_to-uint-24-x--module.exports"></a>

### `module.exports(argument)` ⇒ <code>number</code> ⏏

The abstract operation ToUint24 converts argument to one of 2^24 integer
values in the range 0 through 2^24-1, inclusive.

**Kind**: Exported function  
**Returns**: <code>number</code> - Integer value, 0 through 2^24-1, inclusive.

| Param    | Type                | Description                                      |
| -------- | ------------------- | ------------------------------------------------ |
| argument | <code>number</code> | The argument to convert to one of 2^24 integers. |

**Example**

```js
import toUint24 from 'to-uint-24-x';
console.log(toUint24(1)); // 1
console.log(toUint24(-1)); // 16777215 (2^24-1)
```
