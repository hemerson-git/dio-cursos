const assert = require('assert');
const expect = require('chai').expect;
const Math = require('../src/math');

describe('Math Class', () => {
  it('should return the sum of two numbers', () => {
    const math = new Math();

    // assert.strictEqual(math.sum(5, 5), 10);
    expect(math.sum(5, 5)).to.equals(10);
  });
});

describe('Math Class', () => {
  it('should be able to return the subttraction from two number', () => {
    const math = new Math();

    // assert.strictEqual(math.sub(10, 5), 5);
    expect(math.sub(10, 5)).to.equals(5);
  });
});

describe('Math Class', () => {
  it('should be able to return the error of subtractions from two number', () => {
    const math = new Math();

    // assert.strictEqual(math.sub(10, 5), 5);
    expect(math.sub(10, 5)).to.not.equals(6);
  });
});
