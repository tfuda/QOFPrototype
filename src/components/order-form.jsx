import React from 'react';
import SldsInput from './slds-input';
import AddressInput from './address-input';

class OrderForm extends React.Component {
	render() {
		const { orderForm, onInputChange, onDonationChange } = this.props;
		return (
			<form>
				<div className="slds-grid slds-nowrap slds-p-top--medium">
					<div className="slds-col--padded slds-size--1-of-2">
						<div className="slds-form--stacked slds-p-bottom--medium">
							<SldsInput fieldName="FirstName__c" label="First Name" placeholder="FIRST NAME" value={orderForm.FirstName__c} onChange={onInputChange} />
							<SldsInput fieldName="LastName__c" label="Last Name" placeholder="LAST NAME" value={orderForm.LastName__c} onChange={onInputChange} />
							<SldsInput fieldName="Email__c" type="email" label="Email" placeholder="EMAIL" value={orderForm.Email__c} onChange={onInputChange} />
							<SldsInput fieldName="Phone__c" label="Phone" placeholder="PHONE" value={orderForm.Phone__c} onChange={onInputChange} />
							<SldsInput fieldName="DonationAmount__c" type="number" label="Donation Amount" value={orderForm.DonationAmount__c} onChange={onInputChange} onBlur={onDonationChange} />
						</div>
						<AddressInput addressType="Billing" streetAddress={orderForm.StreetAddress__c}
						              city={orderForm.City__c} state={orderForm.State__c}
						              postalCode={orderForm.PostalCode__c} onInputChange={onInputChange}/>
					</div>
					<div className="slds-col--padded slds-size--1-of-2">right</div>
				</div>
			</form>
		);
	}
}
OrderForm.propTypes = {
	orderForm: React.PropTypes.object.isRequired,
	onInputChange: React.PropTypes.func.isRequired,
	onDonationChange: React.PropTypes.func.isRequired
}
export default OrderForm;
