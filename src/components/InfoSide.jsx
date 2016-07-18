var React = require('react');
var PanelSimple = require('./PanelSimple.jsx')
var PanelSide = require('./PanelSide.jsx');

var InfoSide = React.createClass({
	render(){
    var style01 = {
        background: '#FF6600',
        borderRadius: 5,
        color: 'white',
        height: 150,
        marginTop: 0,
        marginBottom: 20,
        paddingTop: 25,
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    var styles = [
      {
        background: '#007FFF',
        color: 'white',
        height: 60,
        padding: 0,
        paddingBottom: 10
      },
      {
        background: '#6114CC',
        color: 'white',
        height: 60,
        padding: 0,
        paddingBottom: 10
      },
      {
        background: '#AB00B2',
        color: 'white',
        height: 60,
        padding: 0,
        paddingBottom: 10
      },
      {
        background:'#47B200',
        color: 'white',
        height: 60,
        padding: 0,
        paddingBottom: 10
      }
    ];

  	return(
      <div className="row">
        <PanelSimple classes="side" styles={style01} val = '18°' description="Paris" />
        <PanelSide styles={styles[0]} description='New visitors' val='1.5k'/>
        <PanelSide styles={styles[1]} description='Bounce Rate' val='50%'/>
        <PanelSide styles={styles[2]} description='Searchs' val='28%'/>
        <PanelSide styles={styles[3]} description='Trafic' val='140.5kb'/>
      </div>
  	);
	}
});

module.exports = InfoSide;
