<a name="module_toUint24-x"></a>

## toUint24-x
<a href="https://travis-ci.org/Xotic750/toUint24-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/toUint24-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/toUint24-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/toUint24-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/toUint24-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/toUint24-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/toUint24-x" title="npm version">
<img src="https://badge.fury.io/js/toUint24-x.svg"
alt="npm version" height="18">
</a>

Converts a value to Uint24 module.

Requires ES3 or above.

**Version**: 1.0.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_toUint24-x--module.exports"></a>

### `module.exports` ⇒ <code>number</code> ⏏
The abstract operation ToUint16 converts argument to one of 2^24 integer
values in the range 0 through 2^24-1, inclusive.

**Kind**: Exported member  
**Returns**: <code>number</code> - Integer value, 0 through 2^24-1, inclusive.  

| Param | Type | Description |
| --- | --- | --- |
| argument | <code>number</code> | The argument to convert to one of 2^24 integers. |

**Example**  
```js
var toUint24 = require('toUint24-x');
toUint24(1); // 1
toUint24(-1); // 16777215 (2^24-1)
```
