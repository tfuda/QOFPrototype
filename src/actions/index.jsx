import {vfFetchOrder, vfFetchItems} from '../api';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS';
export const CHANGE_DONATION = 'CHANGE_DONATION';
export const CHANGE_PAYMENT_METHOD = 'CHANGE_PAYMENT_METHOD';
export const CHANGE_DELIVERY_METHOD = 'CHANGE_DELIVERY_METHOD';
export const COPY_BILLING_TO_SHIPPING = 'COPY_BILLING_TO_SHIPPING';
export const INPUT_CHANGE = 'INPUT_CHANGE';

export const FETCH_ORDER = 'FETCH_ORDER';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_ORDER_FAILURE';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export function fetchOrder(id) {
	return (dispatch, getState) => {
		dispatch({ type: FETCH_ORDER, id: id });
		vfFetchOrder(id)
			.then((order) => {
				dispatch(fetchOrderSuccess(order))
			})
			.catch((err) => {
				dispatch(fetchOrderFailure(err))
			});
	}
}
export function fetchOrderSuccess(order) {
	return {type: FETCH_ORDER_SUCCESS, order: order};
}
export function fetchOrderFailure(err) {
	return {type: FETCH_ORDER_FAILURE, error: err};
}

export function fetchItems(orderId) {
	return (dispatch, getState) => {
		dispatch({ type: FETCH_ITEMS, orderId: orderId });
		vfFetchItems(orderId)
			.then((itemList) => {
				dispatch(fetchItemsSuccess(itemList))
			})
			.catch((err) => {
				dispatch(fetchItemsFailure(err))
			});
	}
}
export function fetchItemsSuccess(itemList) {
	return {type: FETCH_ITEMS_SUCCESS, itemList: itemList};
}
export function fetchItemsFailure(err) {
	return {type: FETCH_ITEMS_FAILURE, error: err};
}

export function addItem(item) {
	return {type: ADD_ITEM, item};
}
export function deleteItem(itemName) {
	return {type: DELETE_ITEM, itemName};
}
export function deleteAllItems() {
	return {type: DELETE_ALL_ITEMS}
}
export function changeDonation(donationAmount) {
	return {type: CHANGE_DONATION, donationAmount}
}
export function changeDeliveryMethod(deliveryMethod) {
	return {type: CHANGE_DELIVERY_METHOD, deliveryMethod};
}
export function changePaymentMethod(paymentMethod) {
	return {type: CHANGE_DELIVERY_METHOD, paymentMethod};
}
export function copyBillingToShipping() {
	return {type: COPY_BILLING_TO_SHIPPING};
}
export function inputChange(field, value) {
	return {type: INPUT_CHANGE, field, value};
}
