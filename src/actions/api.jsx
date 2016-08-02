import {
	FETCH_ORDER,
	SET_DON_AMT,
	FETCH_ITEMS,
	FETCH_ORDER_SUCCESS,
	FETCH_ORDER_FAILURE,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAILURE
} from './'
import {
	vfFetchOrder,
	vfSetDonationAmount,
	vfFetchItems
} from '../api';

class ApiActions {
	static fetchOrder(orderId) {
		return (dispatch, getState) => {
			dispatch({type: FETCH_ORDER, id: orderId});
			vfFetchOrder(orderId)
				.then((order) => {
					dispatch(ApiActions.fetchOrderSuccess(FETCH_ORDER, order))
				})
				.catch((err) => {
					dispatch(ApiActions.fetchOrderFailure(FETCH_ORDER, err))
				});
		}
	}
	
	static setDonationAmount(donationAmount) {
		return (dispatch, getState) => {
			let orderId = getState().order.Id;
			dispatch({type: SET_DON_AMT, orderId: orderId, donationAmount: donationAmount});
			vfSetDonationAmount(orderId, donationAmount)
				.then((order) => {
					dispatch(ApiActions.fetchOrderSuccess(SET_DON_AMT, order))
				})
				.catch((err) => {
					dispatch(ApiActions.fetchOrderFailure(SET_DON_AMT, err))
				});
		}
	}
	
	static fetchItems(orderId) {
		return (dispatch, getState) => {
			dispatch({type: FETCH_ITEMS, orderId: orderId});
			vfFetchItems(orderId)
				.then((itemList) => {
					dispatch(ApiActions.fetchItemsSuccess(itemList))
				})
				.catch((err) => {
					dispatch(ApiActions.fetchItemsFailure(err))
				});
		}
	}
	
	static fetchOrderSuccess(requestType, order) {
		return {type: FETCH_ORDER_SUCCESS, requestType: requestType, order: order};
	}
	
	static fetchOrderFailure(requestType, err) {
		return {type: FETCH_ORDER_FAILURE, requestType: requestType, error: err};
	}
	
	static fetchItemsSuccess(itemList) {
		return {type: FETCH_ITEMS_SUCCESS, itemList: itemList};
	}
	
	static fetchItemsFailure(err) {
		return {type: FETCH_ITEMS_FAILURE, error: err};
	}
}
export default ApiActions
