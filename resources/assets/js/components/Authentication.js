import React, { Component } from 'react';
import { connect } from 'react-redux';

const Authentication = (props) => {
	const handleLoginClick = (e) => {
		e.preventDefault();

		// Opens a new window with twitter authentication page.
		window.open("http://unsub.dev/auth", "Twitter Auth", 
			"width=500,height=500,top=400,left=500,resizable=yes,toolbar=yes"
		);
	};

	return (
		<div>
			<button onClick={handleLoginClick}>Login</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {};
};

function mapDispatchToProps(dispatch, componentProps) {
	return {};
};

export default connect(mapStateToProps)(Authentication);