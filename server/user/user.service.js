import BaseService from '../utils/base.service';
import User from './user.model';

class UserService extends BaseService {
	constructor() {
		super(User);
	}

	updatePassword(userId, oldPassword, newPassword) {
		let {updateOne} = this;
		return this.findById(userId)
			.then(user => {
				if(!user && user.password!=oldPassword) {
					return Promise.reject('旧密码不正确');
				}
				return user;
			})
			.then(user =>  updateOne(userId, {password: newPassword}));
	}

	updateBasicInfo(userId, config) {
		let {updateOne} = this;
		return this.findById(userId)
			.then(user => {
				console.log(JSON.stringify(user));
				if(!plan) {
					return Promise.reject('User not found');
				}
				user = user.toObject();
				plan = plan.overideProps(config);
				return updateOne(userId, plan);
			});
	}
}

const userService = new UserService();

export default userService;
