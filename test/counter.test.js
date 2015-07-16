/* eslint-env mocha */
var React = require('react/addons');
var assert = require('chai').assert;

var Counter = require('../src/counter.jsx');

var TestUtils = React.addons.TestUtils;

describe('Counter', function() {

  it('increments the sum when clicked', function() {
    var counter = TestUtils.renderIntoDocument(
      <Counter/>
    );

    TestUtils.Simulate.click(counter.getDOMNode().querySelector('button'));
    assert.equal(counter.state.count, 1);
  });

});
