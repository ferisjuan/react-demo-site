var React = require('react');
var SimplePanelRow = require('./SimplePanelRow.jsx');

var PanelManager = React.createClass({
  render(){
    var info = [
      {val: "20", description: "New followers added this month"},
      {val: '$ 1250', description: "Average Montly Income"},
      {val: "$ 13865", description: "Yearly Income Goal"}
  ];

    return(
      <div id="row">
        <div className="col-sm-8">
          <SimplePanelRow info={info} />
        </div>
        <div className="col-sm-4"></div>
      </div>
    );
  }
});

module.exports = PanelManager;
