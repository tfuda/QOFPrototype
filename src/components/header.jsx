import React,{Component} from 'react';
import {FormattedNumber} from 'react-intl';

class Header extends Component {
	render() {
		let order = this.props.order;
		return (
			<div className="slds-page-header slds-theme--success" role="banner">
				<div className="slds-grid slds-nowrap slds-grid--vertical-align-center">
					<div className="slds-col slds-size--1-of-6">
						<div className="slds-media slds-media--center">
							<div className="slds-media__figure">
								<svg aria-hidden="true" className="slds-icon slds-icon-standard-opportunity">
									<use xlinkHref={sldsRoot + "/assets/icons/custom-sprite/svg/symbols.svg#custom45"}/>
								</svg>
							</div>
							<div className="slds-media__body">
								<p className="slds-page-header__title" >{order.Name}</p>
							</div>
						</div>
					</div>
					<div className="slds-col slds-size--4-of-6"></div>
					<div className="slds-col slds-size--1-of-6 slds-text-align--right">
						<p className="slds-page-header__title">
							Order Total: <FormattedNumber value={order.OrderTotal__c || 0} style="currency" currency="USD" currencyDisplay="symbol"/>
						</p>
						<p className="slds-text-heading--small">{order.Name}</p>
						<p className="slds-text-heading--small">Order Type: {order.Type__c}</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Header;
