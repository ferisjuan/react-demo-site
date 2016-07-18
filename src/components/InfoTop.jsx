var React = require('react');
var PanelSimple = require('./PanelSimple.jsx');

var InfoTop = React.createClass({
  render(){
    var info = [
      {val: "20", description: "New followers added this month"},
      {val: '$ 1250', description: "Average Montly Income"},
      {val: "$ 13865", description: "Yearly Income Goal"}
    ];

    var panelStyles = {
      color: "#737F7F",
      borderRadius: 5,
      height: 150,
      width: '30%',
      marginRight: '3.33%'
    };

    var classes = 'col-sm-4 panel panel-default';

    var createItem = function (el, index) {
      return <PanelSimple
      key = {index + el}
      classes = {classes}
      val = {el.val}
      description = {el.description}
      styles={panelStyles}
      />;
    };
    return(
      <div>
        {info.map(createItem)}
      </div>
    );
  }
});

module.exports = InfoTop;
