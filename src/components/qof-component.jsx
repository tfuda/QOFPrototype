import React from 'react';
import Header from './header';
import ItemTable from './item-table';
import OrderForm from './order-form';
import Footer from './footer';

class QOFComponent extends React.Component {
	componentWillMount() {
		this.props.fetchOrder(this.props.order.Id);
		if (this.props.order.Id) {
			this.props.fetchItems(this.props.order.Id);
		}
	}
	render() {
		const style = {
			height : '775px',
			overflowY : 'auto',
			overflowX : 'hidden'
		};
		var {itemList, ...other} = this.props;
		if (this.props.loadingOrder || this.props.loadingItems) {
			return <div className="slds-container--fluid">Loading...</div>
		} else {
			if (this.props.error) {
				return <div className="slds-container--fluid">{this.props.error}</div>
			} else {
				return (
					<div>
						<div className="slds-container--fluid">
							<Header />
						</div>
						<div style={style}>
							<div className="slds-container--fluid">
								<ItemTable itemList={itemList} onDeleteItem={this.props.onDeleteItem}
								           onDeleteAllItems={this.props.onDeleteAllItems}/>
								<OrderForm {...other} />
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

