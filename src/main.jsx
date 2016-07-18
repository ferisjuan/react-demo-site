// Require react
var React = require('react');

// Require react-dom
var ReactDOM = require('react-dom');

// require the list function from /components/List.jsx
var PanelManager = require('./components/PanelManager.jsx');

// render the <List /> on the div with app id
ReactDOM.render(<PanelManager />, document.getElementById('app'))
