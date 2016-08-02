import {
	FETCH_ORDER_SUCCESS,
} from '../actions';

export default function order(state = {}, action) {
	switch (action.type) {
		case FETCH_ORDER_SUCCESS:
			return action.order;
		default:
			return state;
	}
}

