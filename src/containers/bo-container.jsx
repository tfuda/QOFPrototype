import {connect} from 'react-redux';
import ApiActions from '../actions/api'
import {
	deleteItem,
	deleteAllItems,
} from '../actions';
import OrderFormActions from '../actions/order-form';
import BOComponent from '../components/bo-component';

const mapStateToProps = (state) => {
	return {
		boApp: state.boApp,
		order: state.order,
		itemList: state.itemList,
		orderForm: state.orderForm
	};
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchOrder: (orderId) => {
			dispatch(ApiActions.fetchOrder(orderId));
		},
		fetchItems: (orderId) => {
			dispatch(ApiActions.fetchItems(orderId));
		},
		onOrderFormInputChange: (evt) => {
			dispatch(OrderFormActions.inputChange(evt));
		},
		onDonationChange: (evt) => {
			dispatch(OrderFormActions.donationChange(evt));
		},
		onDeliveryMethodChange: (deliveryMethod) => {
			dispatch(OrderFormActions.changeDeliveryMethod(deliveryMethod))
		},
		onCopyBillingToShipping: () => {
			dispatch(OrderFormActions.copyBillingToShipping())
		},
		onDeleteItem: (name) => {
			dispatch(deleteItem(name))
		},
		onDeleteAllItems: () => {
			dispatch(deleteAllItems())
		}
	}
}
const BOContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BOComponent)
export default BOContainer;
