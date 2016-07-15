import React from 'react';
import simpleForm from '../../highOrderComponents/simpleForm';
import Card from '../../commonComponents/Card';
import LabelFieldSet from '../../commonComponents/LabelFieldSet';
import userService from '../../user/user.service';

const mapStateToFormData = state => ({
	...state.setting.basicInfo
});

@simpleForm({
	fields: ['username', 'email', 'areaCode', 'phone', 'gender'],
	mapStateToFormData
})
class BasicInforSettingForm extends React.Component {

	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
	}

	submitForm() {
		let {fields, isFormValid, resetForm, dispatch} = this.props;
		if(!isFormValid) return;
		const {username, areaCode, phone} = fields;

		userService.updateBasicInfo({username, areaCode, phone})
			.then(result => console.log(result));
	}

	render() {
		let {username, email, gender, areaCode, phone, preSubmit, hasSubmitted} = this.props;
		return (
			<div className="mui">
				<Card style={{border:'none'}}>
					<form onSubmit={e => {
						e.preventDefault();
						preSubmit();
						this.submitForm();
					}}>
						<LabelFieldSet label="名字">
							<input type="text" className="form-control" {...username} />	
						</LabelFieldSet>
						<LabelFieldSet label="Gender" err={(hasSubmitted||gender.touched)&&gender.error} >
								<div className="radio">
								  <label className="col-md-3">
								    <input {...gender} type="radio" name="gender" value="M"  />
								    Male
								  </label>
								  <label>
								    <input {...gender} type="radio" name="gender" value="F" />
								    Female
								  </label>
								</div>
							</LabelFieldSet>
						<LabelFieldSet label="联系电话">
							<div >
								<input type="text" className="form-control col-md-3" style={{float:'left', width: '20%'}} placeholder="Area Code"/>
								<input type="text" className="form-control col-md-9" style={{float:'left', width: '75%', marginLeft: '5%'}} placeholder="Phone Number"/>
							</div>
						</LabelFieldSet>
						<button className="btn btn-primary" type="submit">保存</button>
						<button className="btn btn-default" style={{marginLeft:15}}>取消</button>

					</form>
				</Card>
			</div>	
		);
	}	

}

export default BasicInforSettingForm;
