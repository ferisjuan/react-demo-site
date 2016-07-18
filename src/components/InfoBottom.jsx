var React = require('react');
var PanelComplex = require('./PanelComplex.jsx');

var InfoBottom = React.createClass({
  render(){

  var info = [
    {shotViews: 15080},
    {likes: 12000},
    {comments: 5000}
  ];

    var styles = {
      values: {},
      description: {}
    };

    var panelBodyStyles01 = {
      background: '#007FFF',
      height: 200
    };
    var panelBodyStyles02 = {
      background: '#FF6600',
      height: 200
    };
    var panelFooterStyles = {
      background: '#364040',
      height: 100,
    };


    return (
      <div className="">
        <PanelComplex info={info}
        panelBodyStyles={panelBodyStyles01}
        panelFooterStyles={panelFooterStyles} />
        <PanelComplex info={info}
        panelBodyStyles={panelBodyStyles02}
        panelFooterStyles={panelFooterStyles} />
       </div>
    );
  }
});

module.exports = InfoBottom;
