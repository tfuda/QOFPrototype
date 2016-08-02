// Action type constants

// API actions (actions that get fired to either invoke an async operation, or get fired when the operation completes)
export const FETCH_ORDER = 'api.FETCH_ORDER'
export const SET_DON_AMT = 'api.SET_DON_AMT'
export const FETCH_ORDER_SUCCESS = 'api.FETCH_ORDER_SUCCESS'
export const FETCH_ORDER_FAILURE = 'api.FETCH_ORDER_FAILURE'
export const FETCH_ITEMS = 'api.FETCH_ITEMS'
export const FETCH_ITEMS_SUCCESS = 'api.FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'api.FETCH_ITEMS_FAILURE'

// Order form actions
export const OF_INPUT_CHANGE = 'orderForm.INPUT_CHANGE'
export const OF_DON_CHANGE = 'orderForm.DON_CHANGE'
export const OF_PM_CHANGE = 'orderForm.PM_CHANGE'
export const OF_DM_CHANGE = 'orderForm.DM_CHANGE'
export const OF_COPY_B2S = 'orderForm.COPY_B2S'

// TODO
export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS'

export function addItem(item) {
	return {type: ADD_ITEM, item};
}
export function deleteItem(itemName) {
	return {type: DELETE_ITEM, itemName};
}
export function deleteAllItems() {
	return {type: DELETE_ALL_ITEMS}
}
