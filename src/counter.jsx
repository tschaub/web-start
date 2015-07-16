var React = require('react');

var math = require('./math');

var Counter = React.createClass({

  getInitialState: function() {
    return {
      count: 0
    };
  },

  _onButtonClick: function() {
    this.setState({count: math.add(this.state.count, 1)});
  },

  render: function() {
    return (
      <div>
        <button onClick={this._onButtonClick}>click</button>
        <p>{this.state.count}</p>
      </div>
    );

  }

});

module.exports = Counter;
