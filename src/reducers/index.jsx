import itemList from './item-list';
import order from './order';

const initialItems = [
	{
		name: 'ITEM-000001',
		description: 'The Tom Show, July 27, 2016',
		quantity: 1,
		unitPrice: 40.00,
		unitFee: 4.00,
		subtotal: 44.00,
		discount: 0.00,
		total: 44.00
	},
	{
		name: 'ITEM-000002',
		description: 'The Tom Show, July 27, 2016',
		quantity: 1,
		unitPrice: 40.00,
		unitFee: 4.00,
		subtotal: 44.00,
		discount: 0.00,
		total: 44.00
	}
]

const initialOrder = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	billingStreet: '',
	billingCity: '',
	billingState: '',
	billingPostalCode: '',
	paymentMethod: 'Credit Card',
	deliveryMethod: 'Email',
	shippingStreet: '',
	shippingCity: '',
	shippingState: '',
	shippingPostalCode: '',
	itemTotal: 88.00,
	donationAmount: 0.00,
	orderFee: 2.00,
	deliveryFee: 0.00,
	orderTotal: 90.00,
	orderStatus: 'Draft'
}

const initialState = {
	order: initialOrder,
	itemList: initialItems
}

export default function qofApp(state = initialState, action) {
	let newItemList = itemList(state.itemList, action);
	let newOrder = order(state.order, action, newItemList);
	return Object.assign({}, state, { order: newOrder, itemList: newItemList });
}
