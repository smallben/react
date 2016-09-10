'use strict';

var React = require('react');
var IndexList = require('./index_list.js');
var IndexForm = require('./index_form.js');


//Class name first character MUST be upper-letter.
var IndexBox = React.createClass({
	render: function() {
		return (
			//Class name first character MUST be lower-letter.
			<div className="indexBox">
				<h1>Hello, world!</h1>
				<IndexList />
				<IndexForm />
			</div>
		       );
	}

});

React.render(    
	     	<IndexBox />,
		document.getElementById('example')
	       );         
