import BaseService from '../utils/base.service';
import User from './user.model';

class UserService extends BaseService {
	constructor() {
		super(User);
	}
}

const userService = new UserService();

export default userService;
