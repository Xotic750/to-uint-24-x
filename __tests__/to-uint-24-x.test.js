let toUint24;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  toUint24 = require('../../index.js');
} else {
  toUint24 = returnExports;
}

describe('toUint24', function() {
  it('is a function', function() {
    expect(typeof toUint24).toBe('function');
  });

  it('0 should be 0', function() {
    expect(toUint24(0)).toBe(0);
  });

  it('1 should be 1', function() {
    expect(toUint24(1)).toBe(1);
  });

  it('-1 is the maximum value 16777215', function() {
    expect(toUint24(-1)).toBe(16777215);
  });

  it('naN should be 0', function() {
    expect(toUint24(NaN)).toBe(0);
  });

  it('infinity should be 0', function() {
    expect(toUint24(Infinity)).toBe(0);
  });

  it('-Infinity should be 0', function() {
    expect(toUint24(-Infinity)).toBe(0);
  });
});
