var React = require('react');
var Values = require('./Values.jsx');
var Description = require('./Description.jsx');

var PanelSimple = React.createClass({

  render(){

    return(
      <div className={this.props.classes} style={this.props.styles}>
        <Values val={this.props.val} />
        <Description style={this.props.style} description={this.props.description} />
      </div>
    );
  }
});

module.exports = PanelSimple;
