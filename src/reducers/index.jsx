import {combineReducers} from 'redux';
import {
	FETCH_ORDER,
	SET_DON_AMT,
	FETCH_ORDER_SUCCESS,
	FETCH_ORDER_FAILURE,
	FETCH_ITEMS,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAILURE
} from '../actions';
import orderForm from './order-form';
import order from './order';
import itemList from './item-list';


const initialState = {
	boApp: {
		// TODO - This is the hard coded ID of an existing reservation order
		orderId: 'a0o36000001YcBGAA0',
		loadingOrder: true,
		loadingItems: true,
		error: null,
	},
	order: {},
	itemList: [],
	orderForm: {}
}

function boApp(state = {}, action) {
	switch (action.type) {
		case FETCH_ORDER:
		case SET_DON_AMT:
			return {...state, loadingOrder: true, error: null};
		case FETCH_ORDER_SUCCESS:
			return {...state, orderId: action.order.Id, loadingOrder: false};
		case FETCH_ORDER_FAILURE:
			return {...state, error: action.error, loadingOrder: false};
		case FETCH_ITEMS:
			return {...state, loadingItems: true, error: null};
		case FETCH_ITEMS_SUCCESS:
			return {...state, itemList: action.itemList, loadingItems: false};
		case FETCH_ITEMS_FAILURE:
			return {...state, error: action.error, loadingItems: false};
		default:
			return state;
	}
}

function rootReducer(state = initialState, action) {
	return {
		boApp: boApp(state.boApp, action),
		order: order(state.order, action),
		itemList: itemList(state.itemList, action),
		orderForm: orderForm(state.orderForm, action)
	}
}
export default rootReducer;
