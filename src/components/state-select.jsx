import React from 'react';
import SldsSelect from './slds-select';

const STATE_LIST = [
	{label: 'Alabama', value: 'AL'},
	{label: 'Alaska', value: 'AK'},
	{label: 'Arkansas', value: 'AR'},
	{label: 'Connecticut', value: 'CT'},
	{label: 'Maine', value: 'ME'},
	{label: 'Massachusetts', value: 'MA'},
	{label: 'New Hampshire', value: 'NH'},
	{label: 'New Jersey', value: 'NJ'},
	{label: 'New York', value: 'NY'},
	{label: 'Rhode Island', value: 'RI'},
	{label: 'Vermont', value: 'VT'}
]

class StateSelect extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<SldsSelect fieldName={this.props.fieldName} value={this.props.value} onChange={this.props.onChange}
			            selectOptions={STATE_LIST} label={this.props.label} size={this.props.size} />
		);
	}
}
StateSelect.propTypes = {
	fieldName: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string,
	size: React.PropTypes.string
}
StateSelect.defaultProps = {
	label: 'State',
	size: '1'
}
export default StateSelect
