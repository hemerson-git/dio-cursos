const assert = require('assert');
const Math = require('../src/math');

describe('Math Class', () => {
  it('should return the sum of two numbers', () => {
    const math = new Math();

    assert.strictEqual(math.sum(5, 5), 10);
  });
});

describe('Math Class', () => {
  it('should be able to return the subttraction from two number', () => {
    const math = new Math();

    assert.strictEqual(math.sub(10, 5), 5);
  });
});
