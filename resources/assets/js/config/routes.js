import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Auth from '../containers/Auth';

export default (
	<Route>
		<Route path="/" component={App} />
		<Route path="/authenticate/:token" component={Auth} />
	</Route>
);