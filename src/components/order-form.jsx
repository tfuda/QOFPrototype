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
		if (order.deliveryMethod === 'Ship') {
			shippingPanel = (
				<div className="slds-p-top--medium">
					<a href="#" className="slds-button slds-button--brand slds-m-bottom--medium"
					   onClick={this.onCopyBillingToShipping}>Copy Billing Address</a>
					<AddressInput addressType="Shipping" street={order.shippingStreet}
					              city={order.shippingCity}
					              state={order.shippingState}
					              postalCode={order.shippingPostalCode} onInputChange={this.onInputChange}/>
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
									<span className="slds-input"><FormattedNumber value={order.itemTotal}
									                                              style="currency" currency="USD"
									                                              currencyDisplay="symbol"/></span>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Order Fee</label>
									<span className="slds-input"><FormattedNumber value={order.orderFee}
									                                              style="currency" currency="USD"
									                                              currencyDisplay="symbol"/></span>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Delivery Fee</label>
									<span className="slds-input"><FormattedNumber value={order.deliveryFee}
									                                              style="currency" currency="USD"
									                                              currencyDisplay="symbol"/></span>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Donation Amount</label>
									<input id="donationAmount" className="slds-input" type="number"
									       onChange={this.onDonationChange} value={order.donationAmount}/>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-1">
									<label className="slds-form-element__label">Order Total</label>
									<span className="slds-input"><FormattedNumber value={order.orderTotal}
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
									<label className="slds-form-element__label" htmlFor="firstName">First Name</label>
									<input id="firstName" className="slds-input" type="text"
									       onChange={this.onInputChange} value={order.firstName}/>
								</div>
								<div className="slds-form-element slds-size--1-of-2">
									<label className="slds-form-element__label" htmlFor="lastName">Last Name</label>
									<input id="lastName" className="slds-input" type="text"
									       onChange={this.onInputChange} value={order.lastName}/>
								</div>
							</div>
							<div className="slds-form-element__row">
								<div className="slds-form-element slds-size--1-of-2">
									<label className="slds-form-element__label" htmlFor="emails">Email</label>
									<input id="email" className="slds-input" type="email" onChange={this.onInputChange}
									       value={order.email}/>
								</div>
								<div className="slds-form-element slds-size--1-of-2">
									<label className="slds-form-element__label" htmlFor="phone">Phone</label>
									<input id="phone" className="slds-input" type="text" onChange={this.onInputChange}
									       value={order.phone}/>
								</div>
							</div>
						</div>
					</fieldset>
					<AddressInput addressType="Billing" street={order.billingStreet}
					              city={order.billingCity}
					              state={order.billingState} postalCode={order.billingPostalCode}
					              onInputChange={this.onInputChange}/>
					<DeliveryMethodRadio onDeliveryMethodChange={this.props.onDeliveryMethodChange}
					                     selectedDeliveryMethod={order.deliveryMethod}/>
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
