import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const Root = (props) => {
	return (
		<Provider store={props.store}>
			<Router history={props.history} routes={props.routes} />
		</Provider>
	);
};

export default Root;