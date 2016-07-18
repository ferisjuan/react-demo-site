var React = require('react');
var Values = require('./Values.jsx');
var Description = require('./Description.jsx');
var PanelSimple = require('./PanelSimple.jsx');

var PanelComplex = React.createClass({
  render(){
    var panelStyles = {
      color: 'white'
    };

    var createItem = function (el, index) {
      var keys = Object.keys(el);
      return (
        <div className="col-sm-4 info-bottom">
          <PanelSimple
          key={index+el}
          val={el[keys[0]]}
          description={keys[0]}
          styles={panelStyles}
          classes="text-center"
          />
        </div>
      );
    };


    return(
      <div className="panel panel-deafult">
        <div className="panel-body" style={this.props.panelBodyStyles}>

        </div>
        <div className="panel-footer" style={this.props.panelFooterStyles}>
          <div className="row">
            {this.props.info.map(createItem)}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PanelComplex;
