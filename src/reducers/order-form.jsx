import {
	SET_DON_AMT,
	FETCH_ORDER_SUCCESS,
	OF_INPUT_CHANGE,
	OF_PM_CHANGE,
	OF_DM_CHANGE,
	OF_COPY_B2S
} from '../actions';

export default function orderForm(state = {}, action) {
	switch (action.type) {
		case FETCH_ORDER_SUCCESS:
			switch (action.requestType) {
				case SET_DON_AMT:
					// Only merge in the donation amount from the order
					return {...state, DonationAmount__c: (action.order.DonationAmount__c) ? action.order.DonationAmount__c.toString() : ''}
				default:
					return copyOrderPropsToOrderForm(state, action.order);
			}
		case OF_INPUT_CHANGE:
			let newFieldValue = {};
			let key = action.fieldName;
			newFieldValue[key] = action.newValue;
			return Object.assign({}, state, newFieldValue);
		case OF_PM_CHANGE:
		case OF_DM_CHANGE:
		case OF_COPY_B2S:
		default:
			return state;
	}
}

function copyOrderPropsToOrderForm(state, order) {
	return {...state,
		Salutation__c: order.Salutation__c,
		FirstName__c: order.FirstName__c,
		LastName__c: order.LastName__c,
		Email__c: order.Email__c,
		Phone__c: order.Phone__c,
		StreetAddress__c: order.StreetAddress__c,
		City__c: order.City__c,
		State__c: order.State__c,
		PostalCode__c: order.PostalCode__c,
		Country__c: order.Country__c,
		ShippingStreetAddress__c: order.ShippingStreetAddress__c,
		ShippingCity__c: order.ShippingCity__c,
		ShippingState__c: order.ShippingState__c,
		ShippingPostalCode__c: order.ShippingPostalCode__c,
		ShippingCountry__c: order.ShippingCountry__c,
		DonationAmount__c: (order.DonationAmount__c) ? order.DonationAmount__c.toString() : '',
		DeliveryMethod__c: order.DeliveryMethod__c,
		PaymentMethod__c: order.PaymentMethod__c,
		OrderOrigin__c: order.OrderOrigin__c
	};
}



