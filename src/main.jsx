// Require react
var React = require('react');

// Require react-dom
var ReactDOM = require('react-dom');

// require the components from /components/*.jsx
var InfoTop = require('./components/InfoTop.jsx');
var InfoBottom = require('./components/InfoBottom.jsx');
var InfoSide = require('./components/InfoSide.jsx');

// render the top row panels
ReactDOM.render(<InfoTop />, document.getElementById('info-top'));
ReactDOM.render(<InfoBottom />, document.getElementById('info-bottom'));
ReactDOM.render(<InfoSide />, document.getElementById('info-side'));
