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
		if(token !== null) {
			
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