var React = require('react');

var Description = React.createClass({
  render(){
    return(
      <small style={this.props.styles}>{this.props.description}</small>
    );
  }
});

module.exports = Description;
