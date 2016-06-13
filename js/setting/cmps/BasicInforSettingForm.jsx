import React from 'react';
import simpleForm from '../../highOrderComponents/simpleForm';
import Card from '../../commonComponents/Card';
import LabelFieldSet from '../../commonComponents/LabelFieldSet';

const mapStateToFormData = state => ({
	name: state.setting.basicInfo && state.setting.basicInfo.name
});

@simpleForm({
	fields: ['name', 'email'],
	mapStateToFormData
})
class BasicInforSettingForm extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let {name, email} = this.props;
		return (
			<div className="mui">
				<Card>
					<form>
						<LabelFieldSet label="Name">
							<input type="text" {...name} />	
						</LabelFieldSet>						

					</form>
				</Card>
			</div>	
		);
	}	

}

export default BasicInforSettingForm;
