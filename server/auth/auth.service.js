import userService from '../user/user.service';
import { failWithMessage, successWithData } from '../utils/messageGenerator';
import Q from 'q';
import profile from '../../isomorphic/decorators/profile.decorator';

class AuthService {

    validateLogin(username, password) {
        return userService.findOne({ username })
            .then(user => {
                if (!user) {
                    return failWithMessage('Username not Found');
                }
                if (user.password !== password) {
                    return failWithMessage('Password not Match');
                }

                return successWithData(user);
            })
    }

	@profile
    signup({ username, password, email, gender }) {

		throw new Error('just for fun');
        return this.checkUserUnique({ username, email })
            .then(unique => {
            	console.log('unique', unique)
                if (!unique) return Promise.reject('Username is taken');
                return userService.createOne({ username, password, email, gender });
            })
            .then(({ username, password, _id }) => ({ username, password, _id }));
    }
	
	@profile
    checkUserUnique(query) {
    	console.log(aaasss)
        return userService.findOne(query)
            .then(user => user == null);
    }

}

const authService = new AuthService;

export default authService;
