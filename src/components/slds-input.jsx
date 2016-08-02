import React,{Component} from 'react';

class SldsInput extends Component {
	render() {
		return(
			<div className="slds-form-element">
				<label className="slds-form-element__label" >{this.props.label}</label>
				<div className="slds-form-element__control">
					<input className="slds-input" name={this.props.fieldName} value={this.props.value}
					       type={this.props.type} placeholder={this.props.placeholder}
					       onChange={this.props.onChange} onBlur={this.props.onBlur} />
				</div>
			</div>
		);
	}
}
SldsInput.propTypes = {
	fieldName: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	type: React.PropTypes.string,
	label: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired,
	onBlur: React.PropTypes.func
}
SldsInput.defaultProps = {
	type: 'text'
}
export default SldsInput;


