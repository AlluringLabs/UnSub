import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Import the other reducers HERE...
const rootReducer = combineReducers({
	routing
});

export default rootReducer;