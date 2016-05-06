import React from 'react';
import {connect} from 'react-redux';
import simpleForm from  '../../highOrderComponents/simpleForm';
import LabelFieldSet from '../../commonComponents/LabelFieldSet';

const validate = ({storyTitle=''}) => {
	return storyTitle.length<2? {storyTitle: 'At least 2'}: {};
}

@connect()
@simpleForm({
	fields: ['storyTitle'],
	validate
})
class AddStoryForm extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		let {hasSubmitted, storyTitle, preSubmit} = this.props;
		return (
				<form onSubmit={
					e=> {
						e.preventDefault();
						preSubmit();
					}
				}>
					{JSON.stringify(this.props)}
					<LabelFieldSet label="Story Title" err={(hasSubmitted||storyTitle.touched)&&storyTitle.error}>
						<input type="text" {...storyTitle} placeholder="Story Title"/>
					</LabelFieldSet>
				</form>
			)
	}

}


export default AddStoryForm;
