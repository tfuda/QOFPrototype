import {
	ADD_ITEM,
	DELETE_ITEM,
	DELETE_ALL_ITEMS,
	CHANGE_DONATION,
	CHANGE_DELIVERY_METHOD,
	COPY_BILLING_TO_SHIPPING,
	INPUT_CHANGE
} from '../actions';


function calculateOrderTotal(itemTotal = 0, orderFee = 0, deliveryFee = 0, donationAmount = 0) {
	return itemTotal + orderFee + deliveryFee + donationAmount;
}

function calculateItemTotal(itemList) {
	let itemTotal = 0;
	itemList.forEach(function (item) {
		itemTotal += item.OrderItemTotal__c
	});
	return itemTotal;
}

export default function order(state = {}, action, itemList) {
	switch (action.type) {
		case ADD_ITEM:
		case DELETE_ITEM:
		case DELETE_ALL_ITEMS:
			let newItemTotal = calculateItemTotal(itemList);
			let newOrderTotal = calculateOrderTotal(newItemTotal, state.Fees__c, state.ShippingFee__c, state.DonationAmount__c);
			return Object.assign({}, state, {
				Subtotal__c: newItemTotal,
				OrderTotal__c: newOrderTotal
			});
		case CHANGE_DONATION:
			return Object.assign({}, state, {
				DonationAmount__c: action.donationAmount,
				OrderTotal__c: calculateOrderTotal(state.Subtotal__c, state.Fees__c, state.ShippingFee__c, action.donationAmount)
			});
		case CHANGE_DELIVERY_METHOD:
			let deliveryFee = (action.deliveryMethod === 'Ship') ? 3.00 : 0.00;
			return Object.assign({}, state, {
				DeliveryMethod__c: action.deliveryMethod,
				ShippingFee__c: deliveryFee,
				OrderTotal__c: calculateOrderTotal(state.Subtotal__c, state.Fees__c, deliveryFee, state.DonationAmount__c)
			});
		case COPY_BILLING_TO_SHIPPING:
			return Object.assign({}, state, {
				ShippingStreet__c: state.Street__c,
				ShippingCity__c: state.City__c,
				ShippingState__c: state.State__c,
				ShippingPostalCode__c: state.PostalCode__c
			});
		case INPUT_CHANGE:
			let newFieldValue = {};
			let key = action.field;
			newFieldValue[key] = action.value;
			return Object.assign({}, state, newFieldValue);
		default:
			return state;
	}
}

