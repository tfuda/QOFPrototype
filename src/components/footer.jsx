import React,{Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="slds-page-header" role="banner">
				<div className="slds-media slds-media--center">
					<div className="slds-media__figure">
						<svg aria-hidden="true" className="slds-icon slds-icon-standard-opportunity">
							<use xlinkHref={sldsRoot + "/assets/icons/standard-sprite/svg/symbols.svg#opportunity"}/>
						</svg>
					</div>
					<div className="slds-media__body">
						<p className="slds-page-header__title slds-truncate slds-align-middle" title="Rohde Corp - 80,000 Widgets">Rohde Corp - 80,000 Widgets</p>
						<p className="slds-text-body--small page-header__info">Mark Jaeckal • Unlimited Customer • 11/13/15</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;


