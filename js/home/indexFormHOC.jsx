import React from 'react';
import simpleForm from '../highOrderComponents/simpleForm';
import {connect} from 'react-redux';
import {setStartForm} from '../tripPlanner/tripPlanActionReducer';

const validate = ({peopleCount, daysCount, averageAge}) => {
	let errs = {}
	if(!Number.isInteger(peopleCount) || parseInt(peopleCount)<0 ) {
		errs.peopleCount='请输入合适的人数';
	}
	return errs;
};

const indexFormHOC = (mapStateToFormFields, submit) => WrappedCmp => {


	@connect()
	@simpleForm({
		fields: ['peopleCount', 'daysCount', 'averageAge'],
		validate,
		mapStateToFormData: mapStateToFormFields
	})
	class Wrapper extends React.Component {
		constructor(props){
			super(props);
			this.submitForm = this.submitForm.bind(this);
		}

		submitForm() {
			
			let {fields, isFormValid, dispatch, onHomeStartFormSuccess} = this.props;
			let {peopleCount, daysCount, averageAge} = this.props;

			let form = {
				peopleCount: peopleCount? peopleCount.value: null,
				daysCount: daysCount? daysCount.value: null,
				averageAge: averageAge? averageAge.value: null
			};

			submit&&submit(dispatch, form);

			// dispatch(setStartForm({
			// 	peopleCount: peopleCount? peopleCount.value: null,
			// 	daysCount: daysCount? daysCount.value: null,
			// 	averageAge: averageAge? averageAge.value: null
			// }));
			if(onHomeStartFormSuccess)	{
				onHomeStartFormSuccess();
			}
		}

		render () {
			return <WrappedCmp submitForm={this.submitForm} {...this.props}/>
		}
	}

	return Wrapper;
};

export default indexFormHOC;
