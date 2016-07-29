import React from 'react';
import StateSelect from './state-select';

export default class AddressInput extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		// Generate DOM Ids
		const streetId = this.getDomId(this.props.addressType, 'Street__c');
		const cityId = this.getDomId(this.props.addressType, 'City__c');
		const stateId = this.getDomId(this.props.addressType, 'State__c');
		const postalCodeId = this.getDomId(this.props.addressType, 'PostalCode__c');
		return (
			<fieldset className="slds-form--compound">
				<legend className="slds-form-element__label">{this.props.addressType} Address</legend>
				<div className="form-element__group">
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-1">
							<label className="slds-form-element__label" htmlFor={streetId}>Street</label>
							<input id={streetId} className="slds-input" type="text" onChange={this.props.onInputChange}
							       value={this.props.street}/>
						</div>
					</div>
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-2">
							<label className="slds-form-element__label" htmlFor={cityId}>City</label>
							<input id={cityId} className="slds-input" type="text" onChange={this.props.onInputChange}
							       value={this.props.city}/>
						</div>
						<div className="slds-form-element slds-size--1-of-2">
							<StateSelect selectedState={this.props.state || ''} label='State' stateElementId={stateId}
							             size='1' onChange={this.props.onInputChange}/>
						</div>
					</div>
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-2">
							<label className="slds-form-element__label" htmlFor={postalCodeId}>Postal Code</label>
							<input id={postalCodeId} className="slds-input" type="text"
							       onChange={this.props.onInputChange} value={this.props.postalCode}/>
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
	street: React.PropTypes.string,
	city: React.PropTypes.string,
	postalCode: React.PropTypes.string,
	onInputChange: React.PropTypes.func.isRequired
}
AddressInput.defaultProps = {addressType: ''}
