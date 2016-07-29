import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import qofApp from './reducers';
import App from './components/app';

let store = createStore(qofApp, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<IntlProvider locale="en">
			<App />
		</IntlProvider>
	</Provider>,
	document.querySelector('#qofPrototype')
);
