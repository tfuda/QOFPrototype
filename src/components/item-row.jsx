import React from 'react';
import {FormattedNumber} from 'react-intl';

class ItemTable extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
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
				<td scope="row">
					<div className="slds-truncate">{this.props.item.Name}</div>
				</td>
				<td>
					<div className="slds-truncate">{this.props.item.ItemDetail__c}</div>
				</td>
				<td>
					<div className="slds-truncate">{this.props.item.Quantity__c}</div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.UnitPrice__c || 0} style="currency"
					                                                currency="USD" currencyDisplay="symbol"/></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.UnitFee__c || 0} style="currency"
					                                                currency="USD" currencyDisplay="symbol"/></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.Subtotal__c || 0} style="currency"
					                                                currency="USD" currencyDisplay="symbol"/></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.DiscountTotal__c || 0} style="currency"
					                                                currency="USD" currencyDisplay="symbol"/></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.OrderItemTotal__c} style="currency"
					                                                currency="USD" currencyDisplay="symbol"/></div>
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
