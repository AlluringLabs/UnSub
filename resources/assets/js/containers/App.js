import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Do stuff
	}

	render() {
		const { children } = this.props;
		return (
			<div className="app">
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