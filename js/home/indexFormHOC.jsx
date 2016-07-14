import React from 'react';
import simpleForm from '../highOrderComponents/simpleForm';
import {connect} from 'react-redux';
import {setStartForm} from '../tripPlanner/tripPlanActionReducer';
import {isInteger, isPositiveInteger} from '../../isomorphic/utils/typeUtils';

const validate = ({peopleCount, daysCount, averageAge}) => {
	let errs = {}
	if(!isPositiveInteger(peopleCount) ) {
		errs.peopleCount='请输入合适的人数';
	}
	if(!isPositiveInteger(daysCount) ) {
		errs.daysCount='请输入合适的Days';
	}
	if(!isPositiveInteger(averageAge) ) {
		errs.averageAge='请输入合适的Age';
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
			
			let {fields, isFormValid, preSubmit, dispatch, onHomeStartFormSuccess} = this.props;
			let {peopleCount, daysCount, averageAge} = this.props;

			let form = {
				peopleCount: peopleCount? peopleCount.value: null,
				daysCount: daysCount? daysCount.value: null,
				averageAge: averageAge? averageAge.value: null
			};

			preSubmit();
			if(!isFormValid)	{
				return;
			}
			submit&&submit(dispatch, form);

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
