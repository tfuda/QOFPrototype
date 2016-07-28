import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {IntlProvider} from 'react-intl';

import qofApp from './reducers';
import App from './components/app';

let store = createStore(qofApp);

ReactDOM.render(
	<Provider store={store}>
		<IntlProvider locale="en">
			<App />
		</IntlProvider>
	</Provider>,
	document.querySelector('#qofPrototype')
);
