import React from 'react';
import Header from './header';
import ItemTable from './item-table';
import OrderForm from './order-form';
import Footer from './footer';

class BOComponent extends React.Component {
	componentDidMount() {
		this.props.fetchOrder(this.props.boApp.orderId);
		if (this.props.boApp.orderId) {
			this.props.fetchItems(this.props.boApp.orderId);
		}
	}
	render() {
		const style = {
			height : '790px',
			overflowY : 'auto',
			overflowX : 'hidden'
		};
		const {boApp, order, itemList, orderForm, ...other} = this.props;
		if (boApp.loadingOrder || boApp.loadingItems) {
			return <div className="slds-container--fluid">Loading...</div>
		} else {
			if (boApp.error) {
				return <div className="slds-container--fluid">{boApp.error}</div>
			} else {
				return (
					<div>
						<div className="slds-container--fluid">
							<Header order={order} />
						</div>
						<div style={style}>
							<div className="slds-container--fluid">
								<ItemTable itemList={itemList} onDeleteItem={this.props.onDeleteItem} onDeleteAllItems={this.props.onDeleteAllItems}/>
								<OrderForm orderForm={orderForm} onInputChange={this.props.onOrderFormInputChange} onDonationChange={this.props.onDonationChange} />
							</div>
						</div>
						<div className="slds-container--fluid">
							<Footer/>
						</div>
					</div>
				);
			}
		}
	}
}
export default BOComponent;

