var React = require('react');

var Description = React.createClass({
  render(){
    return(
      <small>{this.props.description}</small>
    );
  }
});

module.exports = Description;
