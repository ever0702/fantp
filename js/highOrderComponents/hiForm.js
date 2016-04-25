import React, {Component} from 'react';
import {createFormInitialState, formEvtHandler} from '../utils/formUtil';
import Header from '../partials/Header'

const hiForm = passedIn => WrapCmp => {
	console.log(WrapCmp);
	let propFields = passedIn.fields;
	let {validate} = passedIn;
	console.log('propfield', propFields)
	class Wrapper extends Component {

		constructor(props, context) {
			super(props, context);
			this.state = createFormInitialState(propFields);
			let setState = this.setState.bind(this);

			this.getHandler = formEvtHandler(this.state, setState, validate);

			console.log('hiForm init state', this.state)
		}

		componentDidMount() {
		    console.log('mountinnnggggggeeeeeeeeeeeeDDDDDDDDDDDDDDDDDDDDDD')  
		}

		render() {
			console.log(this.state);
			let pass = { };	
			let {state} = this;
			let {fields, stats, errors} = this.state;
			let getHandler = this.getHandler.bind(this);


			for(let f of propFields) {
				
				let handlers = getHandler(f);
				pass[f] = {
					value: fields[f],
					...stats[f],
					...getHandler(f),
					error: errors[f]
				}
			}

			console.log('pass is .....', pass)

			return (
					<div>Please be possible
						<Header/>
							<WrapCmp {...this.props} {...pass}/>
						Why not
					</div>
				)
			
		}

	}

	return Wrapper;
}

export default hiForm;
