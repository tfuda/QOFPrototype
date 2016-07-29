import {connect} from 'react-redux';
import {
	fetchOrder,
	fetchItems,
	deleteItem,
	deleteAllItems,
	changeDonation,
	changeDeliveryMethod,
	copyBillingToShipping,
	inputChange
} from '../actions';
import QOFComponent from '../components/qof-component';

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		error: state.error,
		order: state.order,
		itemList: state.itemList
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchOrder: (id) => {
			dispatch(fetchOrder(id));
		},
		fetchItems: (orderId) => {
			dispatch(fetchItems(orderId));
		},
		onDeleteItem: (name) => {
			dispatch(deleteItem(name))
		},
		onDeleteAllItems: () => {
			dispatch(deleteAllItems())
		},
		onDonationChange: (donationAmount) => {
			dispatch(changeDonation(donationAmount))
		},
		onDeliveryMethodChange: (deliveryMethod) => {
			dispatch(changeDeliveryMethod(deliveryMethod))
		},
		onCopyBillingToShipping: () => {
			dispatch(copyBillingToShipping())
		},
		onInputChange: (field, value) => {
			dispatch(inputChange(field, value))
		}
	}
}
const QOFContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(QOFComponent)
export default QOFContainer;
