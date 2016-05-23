import React from 'react';
import simpleForm from '../highOrderComponents/simpleForm';
import {connect} from 'react-redux';
import {setStartForm} from '../tripPlanner/tripPlannerActions';

const validate = ({peopleCount, daysCount, averageAge}) => {
	let errs = {}
	if(!Number.isInteger(peopleCount) || parseInt(peopleCount)<0 ) {
		errs.peopleCount='请输入合适的人数';
	}
	return errs;
};

const indexFormHOC = passedIn => WrappedCmp => {

	@connect(

	)
	@simpleForm({
		fields: ['peopleCount', 'daysCount', 'averageAge'],
		validate,
		mapStateToFormData: state => {
			let {peopleCount, daysCount, averageAge} = state.tripPlanner;
			return {
				peopleCount: peopleCount?peopleCount.value:null,
				daysCount: daysCount?daysCount.value:null,
				averageAge: averageAge?averageAge.value:null
			};
		}
	})
	class Wrapper extends React.Component {
		constructor(props){
			super(props);
			this.submitForm = this.submitForm.bind(this);
		}

		submitForm() {
			
			let {fields, isFormValid, dispatch, onHomeStartFormSuccess} = this.props;
			let {peopleCount, daysCount, averageAge} = this.props;
			dispatch(setStartForm({
				peopleCount,
				daysCount,
				averageAge
			}));
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
