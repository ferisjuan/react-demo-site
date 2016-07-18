var React = require('react');
var Description = require('./Description.jsx');
var Values = require('./Values.jsx');

var PanelSide = React.createClass({
	render(){
		return(
      <div className="panel panel-default">
        <div className="panel-heading" style={this.props.styles}>
          <Description description={this.props.description}/>
          <Values styles={{margin: 0}} val={this.props.val}/>
        </div>
        <div className="panel-body" style={{height: 60}}>
        </div>
      </div>
		);
	}
});

module.exports = PanelSide;
