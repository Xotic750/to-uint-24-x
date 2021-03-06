import toUint24 from '../src/to-uint-24-x';

describe('toUint24', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof toUint24).toBe('function');
  });

  it('0 should be 0', function() {
    expect.assertions(1);
    expect(toUint24(0)).toBe(0);
  });

  it('1 should be 1', function() {
    expect.assertions(1);
    expect(toUint24(1)).toBe(1);
  });

  it('-1 is the maximum value 16777215', function() {
    expect.assertions(1);
    expect(toUint24(-1)).toBe(16777215);
  });

  it('naN should be 0', function() {
    expect.assertions(1);
    expect(toUint24(NaN)).toBe(0);
  });

  it('infinity should be 0', function() {
    expect.assertions(1);
    expect(toUint24(Infinity)).toBe(0);
  });

  it('-Infinity should be 0', function() {
    expect.assertions(1);
    expect(toUint24(-Infinity)).toBe(0);
  });
});
