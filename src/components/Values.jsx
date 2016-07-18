var React = require('react');

var Values = React.createClass({
  render(){
    return(
      <h3><strong>{this.props.val}</strong></h3>
    );
  }
});

module.exports = Values;
