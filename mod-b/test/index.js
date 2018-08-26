const assert = require('chai').assert;
const add = require('../src/index');

describe('tests', () => {
  it('should subtract', () => {
    assert.equal(add(1, 1), 0);
  });
});
