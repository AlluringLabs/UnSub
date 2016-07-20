import React, { Component } from 'react';
import { connect } from 'react-redux';

const Authentication = (props) => {
	const handleLoginClick = (e) => {
		e.preventDefault();

		window.open("/auth");
	};

	return (
		<div>
			<button onClick={handleLoginClick}>
				Login
			</button>
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