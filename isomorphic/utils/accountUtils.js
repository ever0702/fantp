import {failWithMessage, successWithData} from './actionResultUtils';

const validateEmail = email => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	 if(re.test(email)){
	 	return successWithData();
	 } else {
	 	return failWithMessage('请输入一个正确的邮箱');
	 }
}


const validatePassword = password => {
	if(!password) {
		return failWithMessage('请输入密码');
	}
	if(password.length < 6) {
		return failWithMessage('密码至少6位');
	}
	return successWithData();

};

export {validateEmail, validatePassword};
