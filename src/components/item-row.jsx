import React from 'react';
import {FormattedNumber} from 'react-intl';

class ItemTable extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let item = this.props.item;
		return (
			<tr>
				<td scope="row">
					<button className="slds-button slds-button--icon" onClick={this.props.onClick}>
						<svg aria-hidden="true" className="slds-button__icon">
							<use xlinkHref={sldsRoot + "/assets/icons/action-sprite/svg/symbols.svg#remove"}/>
						</svg>
						<span className="slds-assistive-text">Delete Item</span>
					</button>
				</td>
				<td scope="row">{item.Name}</td>
				<td>{item.ItemDetail__c}</td>
				<td>{item.Quantity__c}</td>
				<td>
					<FormattedNumber value={item.UnitPrice__c || 0} style="currency" currency="USD" currencyDisplay="symbol"/>
				</td>
				<td>
					<FormattedNumber value={item.UnitFee__c || 0} style="currency" currency="USD" currencyDisplay="symbol"/>
				</td>
				<td>
					<FormattedNumber value={item.Subtotal__c || 0} style="currency" currency="USD" currencyDisplay="symbol"/>
				</td>
				<td>
					<FormattedNumber value={item.DiscountTotal__c || 0} style="currency" currency="USD" currencyDisplay="symbol"/>
				</td>
				<td>
					<FormattedNumber value={item.OrderItemTotal__c} style="currency" currency="USD" currencyDisplay="symbol"/>
				</td>
			</tr>
		);
	}
}
ItemTable.propTypes = {
	item: React.PropTypes.object.isRequired,
	onClick: React.PropTypes.func.isRequired
}
export default ItemTable
