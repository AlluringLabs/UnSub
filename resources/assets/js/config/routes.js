import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';

export default (
	<Route>
		<Route path="/" component={App} />
		<Route path="/authenticate/:token" component={App} />
	</Route>
);