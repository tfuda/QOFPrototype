import {
	ADD_ITEM,
	DELETE_ITEM,
	DELETE_ALL_ITEMS
} from '../actions'

export default function itemList(state = [], action) {
	switch (action.type) {
		case ADD_ITEM:
			// TODO
			return state;
		case DELETE_ITEM:
			let itemList = state.filter(function (item) {
				return item.name !== action.itemName;
			});
			return itemList;
		case DELETE_ALL_ITEMS:
			return [];
		default:
			return state;
	}
}


