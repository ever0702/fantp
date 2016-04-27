import React, { Component } from 'react';
import {changeFormValue} from './simpleFormCtrl';

const simpleForm = ({ formName, fields, validator, asyncValidator }) => WrappedCmp => {

	  class Wrapper extends  Component {

        constructor(props, context) {
            super(props, context);

            let store = context.store;
            let state = store.getState();

            let currentForm = state.simpleForm[formName] || {};

            for(let f of fields) {
            	currentForm[f] = currentForm[f] || {};
            	currentForm[f].onChange = this.onFieldChange(f);
            }

            this.props = {...this.props, ...currentForm};
            console.log(this.props)
            
            let {dispatch} = store;


        }

        onFieldChange = fieldName => value => {
        	let {dispatch} = this.context.store;
        	dispatch(changeFormValue(formName,  fieldName, value));
        }

        render() {
            return (
             <WrappedCmp {...this.props} onChange={this.onFieldChange}/>
            )
        }
    }


    Wrapper.contextTypes = {
    	store: React.PropTypes.object.isRequired
    }

    return Wrapper;

}


export default simpleForm;
