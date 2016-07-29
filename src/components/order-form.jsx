import React from 'react';
import {FormattedNumber} from 'react-intl';
import Header from './header';
import ItemTable from './item-table';
import AddressInput from './address-input';
import DeliveryMethodRadio from './delivery-method-radio';

export default class OrderForm extends React.Component {
	constructor(props) {
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.onDonationChange = this.onDonationChange.bind(this);
		this.onCopyBillingToShipping = this.onCopyBillingToShipping.bind(this);
	}
	render() {
		let order = this.props.order;
		let shippingPanel = '';
		if (order.DeliveryMethod__c === 'Ship') {
			shippingPanel = (
				<div className="slds-p-top--medium">
					<a href="#" className="slds-button slds-button--brand slds-m-bottom--medium"
					   onClick={this.onCopyBillingToShipping}>Copy Billing Address</a>
					<AddressInput addressType="Shipping" street={order.ShippingStreet__c}
					              city={order.ShippingCity__c}
					              state={order.ShippingState__c}
					              postalCode={order.ShippingPostalCode__c} onInputChange={this.onInputChange}/>
				</div>
			);
		}
		return (
			<div className="slds-grid slds-wrap slds-grid--pull-padded slds-p-around--medium">
				<div className="slds-col--padded slds-size--1-of-1 slds-p-around--medium">
					<fieldset className="slds-form--compound">
						<legend className="slds-form-element__label">Order Details</legend>
						<div className="slds-form-element__group">
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Item Subtotal</label>
									<span className="slds-input"><FormattedNumber value={order.Subtotal__c}
									                                              style="currency" currency="USD"
									                                              currencyDisplay="symbol"/></span>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Order Fee</label>
									<span className="slds-input"><FormattedNumber value={order.Fees__c}
									                                              style="currency" currency="USD"
									                                              currencyDisplay="symbol"/></span>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Delivery Fee</label>
									<span className="slds-input"><FormattedNumber value={order.ShippingFee__c}
									                                              style="currency" currency="USD"
									                                              currencyDisplay="symbol"/></span>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Donation Amount</label>
									<input id="donationAmount" className="slds-input" type="number"
									       onChange={this.onDonationChange} value={order.DonationAmount__c}/>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Order Total</label>
									<span className="slds-input"><FormattedNumber value={order.OrderTotal__c}
									                                              style="currency" currency="USD"
									                                              currencyDisplay="symbol"/></span>
								</div>
							</div>
						</div>
					</fieldset>
					<fieldset className="slds-form--compound">
						<legend className="slds-form-element__label">Buyer Information</legend>
						<div className="form-element__group">
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-2">
									<label className="slds-form-element__label" htmlFor="FirstName__c">First Name</label>
									<input id="FirstName__c" className="slds-input" type="text"
									       onChange={this.onInputChange} value={order.FirstName__c}/>
								</div>
								<div className="slds-form-element slds-size--1-of-2">
									<label className="slds-form-element__label" htmlFor="LastName__c">Last Name</label>
									<input id="LastName__c" className="slds-input" type="text"
									       onChange={this.onInputChange} value={order.LastName__c}/>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-2">
									<label className="slds-form-element__label" htmlFor="Email__c">Email</label>
									<input id="Email__c" className="slds-input" type="email" onChange={this.onInputChange}
									       value={order.Email__c}/>
								</div>
								<div className="slds-form-element slds-size--1-of-2">
									<label className="slds-form-element__label" htmlFor="Phone__c">Phone</label>
									<input id="Phone__c" className="slds-input" type="text" onChange={this.onInputChange}
									       value={order.Phone__c}/>
								</div>
							</div>
						</div>
					</fieldset>
					<AddressInput addressType="Billing" street={order.Street__c}
					              city={order.City__c}
					              state={order.State__c} postalCode={order.PostalCode__c}
					              onInputChange={this.onInputChange}/>
					<DeliveryMethodRadio onDeliveryMethodChange={this.props.onDeliveryMethodChange}
					                     selectedDeliveryMethod={order.DeliveryMethod__c}/>
					{shippingPanel}
				</div>
			</div>
		);
	}
	
	onInputChange(evt) {
		this.props.onInputChange(evt.target.id, evt.target.value);
	}
	
	onDonationChange(evt) {
		this.props.onDonationChange(Number(evt.target.value.trim()));
	}
	
	onCopyBillingToShipping(evt) {
		evt.preventDefault();
		this.props.onCopyBillingToShipping();
	}
}
OrderForm.propTypes = {order: React.PropTypes.object.isRequired}
