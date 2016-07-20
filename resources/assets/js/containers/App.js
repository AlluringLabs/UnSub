import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import Header from '../components/Header';

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const token = this.props.routeParams.token;
		if(typeof token !== 'undefined') {
			localStorage.setItem('jwt-token', JSON.stringify(token));
			console.log(token);
		}
	}

	render() {
		const { children } = this.props;
		return (
			<div className="app">
				<Header />
				{ children }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);