import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function initStore() {
	const logger = createLogger();
	const middleware = applyMiddleware(thunk, logger);

	const store = createStore(
		rootReducer,
		{},
		middleware
	);

	const createStorageListener = (store) => {
		return event => {
			const { action } = JSON.parse(event.key);
			store.dispatch(action);
		};
	};

	window.addEventListener('storage', createStorageListener(store));
};