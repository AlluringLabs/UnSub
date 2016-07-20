import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import Root from './containers/Root';
import initStore from './config/store';
import routes from './config/routes';

const store = initStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Root history={history} store={store} routes={routes} />,
	document.getElementById('root')
);