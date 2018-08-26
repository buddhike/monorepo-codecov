const assert = require('chai').assert;
const {add} = require('../src/index');

describe('tests', () => {
  it('should add', () => {
    assert.equal(add(1, 1), 2);
  });
});
