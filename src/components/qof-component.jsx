import React from 'react';
import Header from './header';
import ItemTable from './item-table';
import OrderForm from './order-form';
import Footer from './footer';

class QOFComponent extends React.Component {
	componentDidMount() {
		this.props.fetchOrder(this.props.qofApp.orderId);
		if (this.props.qofApp.orderId) {
			this.props.fetchItems(this.props.qofApp.orderId);
		}
	}
	render() {
		const style = {
			height : '790px',
			overflowY : 'auto',
			overflowX : 'hidden'
		};
		const {qofApp, order, itemList, orderForm, ...other} = this.props;
		if (qofApp.loadingOrder || qofApp.loadingItems) {
			return <div className="slds-container--fluid">Loading...</div>
		} else {
			if (qofApp.error) {
				return <div className="slds-container--fluid">{qofApp.error}</div>
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
export default QOFComponent;

