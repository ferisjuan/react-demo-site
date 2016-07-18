var React = require('react');

var Values = React.createClass({
  render(){
    return(
      <h3 style={this.props.styles}><strong>{this.props.val}</strong></h3>
    );
  }
});

module.exports = Values;
