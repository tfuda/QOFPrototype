import {connect} from 'react-redux';
import {
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
		order: state.order,
		itemList: state.itemList
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
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
