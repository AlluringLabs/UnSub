import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import Root from './containers/Root';
import rootReducer from './reducers';
import routes from './config/routes';

const logger = createLogger();
const store = createStore(
	rootReducer,
	{},
	applyMiddleware(thunk, logger)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Root history={history} store={store} routes={routes} />,
	document.getElementById('root')
);