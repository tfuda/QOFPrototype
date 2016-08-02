import React,{Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="slds-page-header slds-theme--inverse" role="banner">
				<div className="slds-grid slds-nowrap slds-grid--vertical-align-center">
					<div className="slds-col slds-size--1-of-6">
						<a href="/#" onClick={this.cancelOrder} className="slds-text-heading--medium slds-text-link--reset">Cancel Order</a>
					</div>
				</div>
			</div>
		);
	}
	cancelOrder(evt) {
		evt.preventDefault();
		confirm('Are you sure?');
	}
}
export default Footer;


