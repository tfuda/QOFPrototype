import React from 'react';
import ItemRow from './item-row'

class ItemTable extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		if (this.props.itemList.length == 0) {
			return (<div></div>);
		}
		
		let itemRows = this.props.itemList.map(function (item) {
			return <ItemRow key={item.Name} item={item} onClick={() => this.props.onDeleteItem(item.Name)}/>;
		}, this);
		return (
			<div className="slds-grid slds-wrap slds-grid--pull-padded slds-p-around--medium">
				<div className="slds-col--padded slds-size--1-of-1 slds-p-around--medium">
					<table className="slds-table slds-table--bordered slds-table--cell-buffer">
						<thead>
						<tr className="slds-text-heading--label">
							<th>
								<button className="slds-button slds-button--icon" onClick={this.props.onDeleteAllItems}>
									<svg aria-hidden="true" className="slds-button__icon">
										<use xlinkHref={sldsRoot + "/assets/icons/action-sprite/svg/symbols.svg#remove"}/>
									</svg>
									<span className="slds-assistive-text">Delete All Items</span>
								</button>
							</th>
							<th scope="col">
								<div className="slds-truncate">Item Name</div>
							</th>
							<th scope="col">
								<div className="slds-truncate">Item Detail</div>
							</th>
							<th scope="col">
								<div className="slds-truncate">Quantity</div>
							</th>
							<th scope="col">
								<div className="slds-truncate">Unit Price</div>
							</th>
							<th scope="col">
								<div className="slds-truncate">Unit Fee</div>
							</th>
							<th scope="col">
								<div className="slds-truncate">Subtotal</div>
							</th>
							<th scope="col">
								<div className="slds-truncate">Discount</div>
							</th>
							<th scope="col">
								<div className="slds-truncate">Item Total</div>
							</th>
						</tr>
						</thead>
						<tbody>
						{itemRows}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
ItemTable.propTypes = {
	itemList: React.PropTypes.array.isRequired,
	onDeleteItem: React.PropTypes.func.isRequired,
	onDeleteAllItems: React.PropTypes.func.isRequired
}
export default ItemTable
