import React, { Component } from 'react';
import { createFormInitialState, createEmptyInitialState, formEvtHandler } from '../utils/formUtil';

const hiForm = passedIn => WrapCmp => {
    console.log(WrapCmp);
    let propFields = passedIn.fields;
    let { validate, initData } = passedIn;
    console.log('propfield', propFields)
    class Wrapper extends Component {

        constructor(props, context) {
            super(props, context);
            // this.state = createFormInitialState(propFields);
            this.state = createEmptyInitialState(propFields);
            if (initData) {

                createFormInitialState(propFields, initData).then(form => this.setState(form));
            }
            let setState = this.setState.bind(this);

            this.getHandler = formEvtHandler(setState, validate);

            this.resetForm = this.resetForm.bind(this);

            console.log('hiForm init state', this.state)
        }

        resetForm() {
            if (initData) {
                createFormInitialState(propFields, initData).then(form => this.setState(form));
            } else {

                this.setState(createFormInitialState(propFields));
            }
        }

        componentDidMount() {
            console.log('mountinnnggggggeeeeeeeeeeeeDDDDDDDDDDDDDDDDDDDDDD')
        }

        render() {
            let pass = {};
            let { state } = this;
            let { fields, stats, errors } = this.state;
            let getHandler = this.getHandler.bind(this);

            pass.resetForm = this.resetForm;

            for (let f of propFields) {

                let handlers = getHandler(f, state);
                pass[f] = {
                    value: fields[f],
                    ...stats[f],
                    ...getHandler(f, state),
                    error: errors[f]
                }
            }

            pass.errors = errors;

            console.log('pass is .....', pass)

            return ( < WrapCmp {...this.props } {...pass }
                />
            )

        }

    }

    return Wrapper;
}

export default hiForm;
