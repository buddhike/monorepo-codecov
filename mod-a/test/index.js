const assert = require('chai').assert;
const {add, mul, div} = require('../src/index');

describe('tests', () => {
  it('should add', () => {
    assert.equal(add(1, 1), 2);
  });

  it('should multiply', () => {
    assert.equal(mul(2, 3), 6);
  });

  it('should divide', () => {
    assert.equal(div(6, 2), 3);
  });
});
