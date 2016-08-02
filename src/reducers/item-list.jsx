import {
	FETCH_ITEMS_SUCCESS
} from '../actions'

export default function itemList(state = [], action) {
	switch (action.type) {
		case FETCH_ITEMS_SUCCESS:
			return action.itemList;
		default:
			return state;
	}
}


