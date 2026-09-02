const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../math');

test('add sums two numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
});