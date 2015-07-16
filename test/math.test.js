/* eslint-env mocha */
var assert = require('chai').assert;

var math = require('../src/math');

describe('math', function() {

  describe('add', function() {

    it('returns the sum of two numbers', function() {
      assert.equal(math.add(2, 2), 4);
    });

  });

});
