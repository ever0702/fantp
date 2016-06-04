import React from 'react';
import {RxDom} from '../utils/rxUtils';

class EditableInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputElm = null;
        this.state = {
        	editting: false,
        	edittingValue: props.value
        };

    }

    startEditting() {
    	this.setState({editting: true, edittingValue: this.props.value});
    }
    endEditting () {
    	this.setState({editting: false});
    }

    blur(e) {
    	if(this.props.saveOnBlur) {
    		this.onValueChange(e.target.value);
    	}
		this.endEditting();
    }

    save(e) {
    	this.props.onValueChange(this.state.edittingValue);
    	this.endEditting();
    }

    onInputChange(e) {
    	this.setState({edittingValue: e.target.value});
    }

    onKeyDown(e) {
    	console.log(e)
    	if(e.keyCode == 13) {
    		this.save(e);
    	}
    }

    render() {
		let {onValueChange, value} = this.props;
		let {editting, edittingValue} = this.state;
		return (
			<span className="editable-input" {...this.props}>
			{
				!editting&&
				<span onClick={e => this.startEditting()}>{value}</span>
			}
			{
				editting&&
				<input className="" onBlur={e => this.blur(e)} ref={elm => {if(elm) elm.focus()}} value={edittingValue} onChange = {e=> this.onInputChange(e)} onKeyDown = {e=> this.onKeyDown(e)}/>	
			}
			</span>
		);

    }
}

export default EditableInput;
