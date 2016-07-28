import React from 'react';
import Header from './header';
import ItemTable from './item-table';
import OrderForm from './order-form';
import Footer from './footer';

class QOFComponent extends React.Component {
	render() {
		const style = {
			height : '775px',
			overflowY : 'auto',
			overflowX : 'hidden'
		};
		
		return (
			<div>
				<div className="slds-container--fluid">
					<Header />
				</div>
				<div style={style} >
					<div className="slds-container--fluid">
						<ItemTable itemList={this.props.itemList} onDeleteItem={this.props.onDeleteItem} onDeleteAllItems={this.props.onDeleteAllItems}/>
						<OrderForm {...this.props} />
					</div>
				</div>
				<div className="slds-container--fluid">
					<Footer/>
				</div>
			</div>
		);
	}
}
export default QOFComponent;

