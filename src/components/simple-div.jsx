var React = require('react');
var Values = require('./values.jsx');
var Description = require('description.jsx');

var SimpleDiv = React.createClass({

  render(){
    var divStyle = {}

    if (this.props.background) {
      divStyle.background = this.props.background;
    }
    return(
      <div className={this.props.columns}>
        <Values str={this.props.values}/>
        <Description description={this.props.description} />
      </div>
    );
  }
});
