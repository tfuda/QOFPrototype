import React from 'react';
class SldsSelect extends React.Component {
	render() {
		let selectOptions = this.props.selectOptions.map(function (option) {
			return <option key={option.value} value={option.value}>{option.label}</option>;
		});
		return (
			<div className="slds-form-element">
				<label className="slds-form-element__label" >{this.props.label}</label>
				<div className="slds-form-element__control">
					<div className="slds-select_container">
						<select className="slds-select" fieldName={this.props.fieldName} value={this.props.value}
						        onChange={this.props.onChange} size={this.props.size} label={this.props.label}>
							<option value='' disabled>Select...</option>
							{selectOptions}
						</select>
					</div>
				</div>
			</div>
		);
	}
}
SldsSelect.propTypes = {
	fieldName: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	selectOptions: React.PropTypes.array.isRequired,
	label: React.PropTypes.string.isRequired,
	size: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired
}
SldsSelect.defaultProps = {size: '1', selectValue: ''}
export default SldsSelect
