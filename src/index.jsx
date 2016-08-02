import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './components/app';

const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	return result
}

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<IntlProvider locale="en">
			<App />
		</IntlProvider>
	</Provider>,
	document.querySelector('#qofPrototype')
);
