import React from 'react';
import QOFContainer from '../containers/qof-container';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="slds">
				<QOFContainer/>
			</div>
		);
	}
}

