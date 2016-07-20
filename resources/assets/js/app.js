import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import Root from './containers/Root';
import initStore from './config/store';
import routes from './config/routes';

const store = initStore();
const history = syncHistoryWithStore(browserHistory, store);

// const createStorageListener = (store) => {
// 	return event => {
// 		console.log(event);
// 		const { action } = JSON.parse(event.newValue);
// 		store.dispatch(action);
// 	}
// };

// window.addEventListener('storage', createStorageListener(store));

render(
	<Root history={history} store={store} routes={routes} />,
	document.getElementById('root')
);