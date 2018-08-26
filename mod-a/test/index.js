const assert = require('chai').assert;
const {add, mul} = require('../src/index');

describe('tests', () => {
  it('should add', () => {
    assert.equal(add(1, 1), 2);
  });

  it('should multiply', () => {
    assert.equal(mul(2, 3), 6);
  });
});
