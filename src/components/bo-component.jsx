import React from 'react';
import {Router, Route, hashHistory} from 'react-router'
import Header from './header';
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
		const {boApp, order, ...other} = this.props;
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
						<div className="slds-scrollable--y" style={style}>
							<OrderForm {...other} onInputChange={this.props.onOrderFormInputChange} onDonationChange={this.props.onDonationChange} />
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

