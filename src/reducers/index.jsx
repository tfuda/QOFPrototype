import {
	FETCH_ORDER,
	FETCH_ORDER_SUCCESS,
	FETCH_ORDER_FAILURE,
	FETCH_ITEMS,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAILURE
} from '../actions';

const initialState = {
	loadingOrder: true,
	loadingItems: true,
	error: null,
	order: {
		Id: 'a0o36000001YXRMAA4'
	},
	itemList: []
}

export default function qofApp(state = initialState, action) {
	switch (action.type) {
		case FETCH_ORDER:
			return {...state, loadingOrder: true, error: null};
		case FETCH_ORDER_SUCCESS:
			return {...state, order: action.order, loadingOrder: false};
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
