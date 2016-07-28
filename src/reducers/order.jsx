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
		itemTotal += item.total
	});
	return itemTotal;
}

export default function order(state = {}, action, itemList) {
	switch (action.type) {
		case ADD_ITEM:
		case DELETE_ITEM:
		case DELETE_ALL_ITEMS:
			let newItemTotal = calculateItemTotal(itemList);
			let newOrderTotal = calculateOrderTotal(newItemTotal, state.orderFee, state.deliveryFee, state.donationAmount);
			return Object.assign({}, state, {
				itemTotal: newItemTotal,
				orderTotal: newOrderTotal
			});
		case CHANGE_DONATION:
			return Object.assign({}, state, {
				donationAmount: action.donationAmount,
				orderTotal: calculateOrderTotal(state.itemTotal, state.orderFee, state.deliveryFee, action.donationAmount)
			});
		case CHANGE_DELIVERY_METHOD:
			let deliveryFee = (action.deliveryMethod === 'Ship') ? 3.00 : 0.00;
			return Object.assign({}, state, {
				deliveryMethod: action.deliveryMethod,
				deliveryFee: deliveryFee,
				orderTotal: calculateOrderTotal(state.itemTotal, state.orderFee, deliveryFee, state.donationAmount)
			});
		case COPY_BILLING_TO_SHIPPING:
			return Object.assign({}, state, {
				shippingStreet: state.billingStreet,
				shippingCity: state.billingCity,
				shippingState: state.billingState,
				shippingPostalCode: state.billingPostalCode
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

