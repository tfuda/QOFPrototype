import React from 'react';
import BOContainer from '../containers/bo-container';

export default class BOApp extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="slds">
				<BOContainer/>
			</div>
		);
	}
}

