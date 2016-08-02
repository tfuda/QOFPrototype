import {
	OF_INPUT_CHANGE,
	OF_PM_CHANGE,
	OF_DM_CHANGE,
	OF_COPY_B2S
} from './index';
import ApiActions from './api'

class OrderFormActions {
	static inputChange(evt) {
		return {type: OF_INPUT_CHANGE, fieldName: evt.target.name, newValue: evt.target.value};
	}
	
	static donationChange(evt) {
		let donationAmount = Number(evt.target.value);
		return ApiActions.setDonationAmount(donationAmount);
	}
	
	// TODO
	static deliveryMethodChange(deliveryMethod) {
		return {type: OF_DM_CHANGE, deliveryMethod};
	}
	
	static paymentMethodChange(paymentMethod) {
		return {type: OF_PM_CHANGE, paymentMethod};
	}
	
	static copyBillingToShipping() {
		return {type: OF_COPY_B2S};
	}
}
export default OrderFormActions