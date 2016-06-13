import React from 'react';
import simpleForm from '../highOrderComponents/simpleForm';
import {validatePassword} from '../../isomorphic/utils/accountUtils';
import Card from '../commonComponents/Card';
import LabelFieldSet from '../commonComponents/LabelFieldSet';
import userService from '../user/user.service';

const validate = ({oldPassword='', newPassword = '', reNewPassword = ''}) => {
	let errs = {};
	let passwordResult = validatePassword(newPassword);
	if(!passwordResult.success) errs.newPassword = passwordResult.message;
	if(reNewPassword != newPassword) {
		errs.reNewPassword = '密码不匹配';
	}

	return errs;
}

@simpleForm({
	fields: ['oldPassword', 'newPassword', 'reNewPassword'],
	validate
})
class ChangePasswordSetting extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm() {
    	let {fields, isFormValid, resetForm, dispatch} = this.props;
    	if(!isFormValid) return;
    	const {oldPassword, newPassword} = fields;
		userService.updatePassword({oldPassword, newPassword})	
			.then(result => {
				if(result.success) {
					console.log('password changed');
					resetForm();
				} else {
					console.log('error')
				}
			});
    }
    render() {
    	let {oldPassword, newPassword, reNewPassword, hasSubmitted, resetForm, preSubmit} = this.props;
        return (
        	<div className="mui">
				<Card title="修改密码" style={{border:'none'}} titleStyle={{color:'orange'}}>
					<form onSubmit={e=> {
						e.preventDefault();
						preSubmit();
						this.submitForm();
					}}>
						<LabelFieldSet label="旧密码" err={(hasSubmitted || oldPassword.touched) && oldPassword.error}>
							<input type="password" {...oldPassword} className="form-control" placeholder="旧密码"/>	
						</LabelFieldSet>
						<LabelFieldSet label="新密码" err={(hasSubmitted || oldPassword.touched) && oldPassword.error}>
							<input type="password" {...newPassword} className="form-control" placeholder="新密码"/>	
						</LabelFieldSet>
						<LabelFieldSet label="确认新密码" err={(hasSubmitted || oldPassword.touched) && oldPassword.error}>
							<input type="password" {...reNewPassword} className="form-control" placeholder="确认新密码"/>	
						</LabelFieldSet>
						<button className="btn btn-primary" type="submit">修改密码</button>
						<button className="btn btn-default" style={{marginLeft:15}} onClick={resetForm}>取消</button>
					</form>
				</Card>
			</div>
        );
    }
}

export default ChangePasswordSetting;
