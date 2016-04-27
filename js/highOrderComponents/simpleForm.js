import React, { Component } from 'react';
import { createFormInitialState, createEmptyInitialState, formEvtHandler } from '../utils/formUtil';

const hiForm = passedIn => WrapCmp => {
    let propFields = passedIn.fields;
    let { validate, initData } = passedIn;
    class Wrapper extends Component {

        constructor(props, context) {
            super(props, context);

            this.state = createEmptyInitialState(propFields, validate);
            if (initData) {
                createFormInitialState(propFields, validate, initData).then(form => this.setState(form));
            }

            let setState = this.setState.bind(this);
            this.resetForm = this.resetForm.bind(this);
            this.preSubmit = this.preSubmit.bind(this);

            this.getHandler = formEvtHandler(setState, validate);
        }

        resetForm() {
            if (initData) {
                createFormInitialState(propFields, validate, initData).then(form => this.setState(form));
            } else {

                this.setState(createFormInitialState(propFields, validate));
            }
        }

        preSubmit() {
            let { state } = this;
            state.hasSubmitted = true;
            this.setState(state);
        }

        componentDidMount() {
        }

        render() {

            let { state } = this;
            let getHandler = this.getHandler.bind(this);

            let {fields, stats, errors, hasSubmitted } = this.state;
            let {resetForm, preSubmit} = this;
            let pass = {fields, errors, hasSubmitted, resetForm, preSubmit};

            pass.isFormValid = $.isEmptyObject(errors);

            for (let f of propFields) {

                let handlers = getHandler(f, state);
                pass[f] = {
                    value: fields[f],
                    ...stats[f],
                    ...getHandler(f, state),
                    error: errors[f]
                }
            }


            return ( <WrapCmp {...this.props } {...pass } />
            )

        }

    }

    return Wrapper;
}

export default hiForm;
