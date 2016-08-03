import React from 'react';
import ItemTable from './item-table';
import SldsInput from './slds-input';
import AddressInput from './address-input';

class OrderForm extends React.Component {
	render() {
		const { orderForm, onInputChange, onDonationChange, ...other } = this.props;
		return (
			<div className="slds-container--fluid">
				<ItemTable {...other} />
				<form>
					<div className="slds-grid slds-nowrap slds-p-top--medium">
						<div className="slds-col--padded slds-size--1-of-2">
							<fieldset className="slds-form--compound slds-p-bottom--medium">
								<legend className="slds-form-element__label">Contact Info</legend>
								<div className="slds-form-element__group">
									<div className="slds-form-element__row">
										<div className="slds-form-element slds-size--1-of-2">
											<SldsInput fieldName="FirstName__c" label="First Name" placeholder="FIRST NAME" value={orderForm.FirstName__c} onChange={onInputChange} />
										</div>
										<div className="slds-form-element slds-size--1-of-2">
											<SldsInput fieldName="LastName__c" label="Last Name" placeholder="LAST NAME" value={orderForm.LastName__c} onChange={onInputChange} />
										</div>
									</div>
									<div className="slds-form-element__row">
										<div className="slds-form-element slds-size--1-of-2">
											<SldsInput fieldName="Email__c" type="email" label="Email" placeholder="EMAIL" value={orderForm.Email__c} onChange={onInputChange} />
										</div>
										<div className="slds-form-element slds-size--1-of-2">
											<SldsInput fieldName="Phone__c" label="Phone" placeholder="PHONE" value={orderForm.Phone__c} onChange={onInputChange} />
										</div>
									</div>
								</div>
							</fieldset>
							<AddressInput addressType="Billing" streetAddress={orderForm.StreetAddress__c}
							              city={orderForm.City__c} state={orderForm.State__c}
							              postalCode={orderForm.PostalCode__c} onInputChange={onInputChange}/>
						</div>
						<div className="slds-col--padded slds-size--1-of-2">
							<fieldset className="slds-form--compound slds-p-bottom--medium">
								<legend className="slds-form-element__label">Other Info</legend>
								<div className="slds-form-element__group">
									<div className="slds-form-element__row">
										<div className="slds-form-element slds-size--1-of-2">
											<SldsInput fieldName="DonationAmount__c" type="number" label="Donation Amount" value={orderForm.DonationAmount__c} onChange={onInputChange} onBlur={onDonationChange} />
										</div>
										<div className="slds-form-element slds-size--1-of-2"/>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
OrderForm.propTypes = {
	orderForm: React.PropTypes.object.isRequired,
	itemList: React.PropTypes.array.isRequired,
	onInputChange: React.PropTypes.func.isRequired,
	onDonationChange: React.PropTypes.func.isRequired
}
export default OrderForm;
