var React = require('react');
var SimplePanel = require('./SimplePanel.jsx');

var SimplePanelRow = React.createClass({
  render(){

    var panelStyles = {
      marginRigth: "20",
      height: "200",
      paddingLeft: "30"
    }

    var createItem = function (el, index) {
      return <SimplePanel
      key = {index + el}
      classes='col-sm-3 col-sm-offset-1 panel panel-default'
      val = {el.val}
      description = {el.description}
      />;
    };
    return(
      <div class="row" style={panelStyles}>
      {this.props.info.map(createItem)}
      </div>
    );
  }
});

module.exports = SimplePanelRow;
