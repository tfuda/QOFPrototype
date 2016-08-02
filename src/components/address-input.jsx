import React from 'react';
import SldsInput from './slds-input';
import StateSelect from './state-select';

class AddressInput extends React.Component {
	render() {
		const { addressType } = this.props;
		// Field names
		let streetAddressField = 'StreetAddress__c';
		let cityField = 'City__c';
		let stateField = 'State__c';
		let postalCodeField = 'PostalCode__c';
		if (addressType === 'Shipping') {
			const shipping = 'Shipping';
			streetAddressField = shipping + streetAddressField;
			cityField = shipping + cityField;
			stateField = shipping + stateField;
			postalCodeField = shipping + postalCodeField;
		}
		return (
			<fieldset className="slds-form--compound">
				<legend className="slds-form-element__label">{this.props.addressType} Address</legend>
				<div className="form-element__group">
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-1">
							<SldsInput fieldName={streetAddressField} label="Street" placeholder="STREET" value={this.props.streetAddress} onChange={this.props.onInputChange} />
						</div>
					</div>
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-2">
							<SldsInput fieldName={cityField} label="City" placeholder="CITY" value={this.props.city} onChange={this.props.onInputChange} />
						</div>
						<div className="slds-form-element slds-size--1-of-2">
							<StateSelect fieldName={stateField} label="State" value={this.props.state} onChange={this.props.onInputChange}/>
						</div>
					</div>
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-2">
							<SldsInput fieldName={postalCodeField} label="Postal Code" placeholder="POSTAL CODE" value={this.props.postalCode} onChange={this.props.onInputChange} />
						</div>
						<div className="slds-form-element slds-size--1-of-2"></div>
					</div>
				</div>
			</fieldset>
		);
	}
	
	getDomId(type, field) {
		if (type === 'Shipping') {
			return type + field;
		} else {
			return field;
		}
	}
}

AddressInput.propTypes = {
	addressType: React.PropTypes.string,
	streetAddress: React.PropTypes.string,
	city: React.PropTypes.string,
	state: React.PropTypes.string,
	postalCode: React.PropTypes.string,
	onInputChange: React.PropTypes.func.isRequired
}

AddressInput.defaultProps = {addressType: ''}

export default AddressInput;