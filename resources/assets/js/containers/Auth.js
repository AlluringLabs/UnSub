import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import jwt_decode from 'jwt-decode';

class Auth extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let token = this.props.routeParams.token;
		localStorage.setItem('accessToken', token);
		console.log(token);
	}

	render() {
		const { children } = this.props;
		return (
			<div className="app">
				You are being authenticated...
			</div>
		);
	}

};

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch, componentProps) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);