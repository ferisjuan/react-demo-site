var React = require('react');
var Values = require('./Values.jsx');
var Description = require('./description.jsx');

var SimplePanel = React.createClass({

  render(){
    var panelStyle = {}

    if (this.props.background) {
      divStyle.background = this.props.background;
    }
    return(
      <div className={this.props.classes}>
        <Values val={this.props.val}/>
        <Description description={this.props.description} />
      </div>
    );
  }
});

module.exports = SimplePanel;
