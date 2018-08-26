const assert = require('chai').assert;
const {concat} = require('../src/index');

describe('tests', () => {
  it('should concat', () => {
    assert.equal(concat('a', 'b'), 'ab');
  });
});
