// Require react
var React = require('react');

// Require react-dom
var ReactDOM = require('react-dom');

// require the list function from /components/List.jsx
var simplePanel = require('./components/simple-panel.jsx');

// render the <List /> on the div with app id
ReactDOM.render(<PanelMatrix />, document.getElementById('app'))
