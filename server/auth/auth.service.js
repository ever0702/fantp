import userService from '../user/user.service';
import { failWithMessage, successWithData } from '../utils/messageGenerator';
import profile from '../../isomorphic/decorators/profile.decorator';

class AuthService {

    @profile
    signin({ username, password }) {
    	console.log(username, password)
        return userService.findOne({ username })
            .then(user => {
            	console.log(user);
				if(!user) {
					return Promise.reject('Username not Found');
				}
				if(user.password!= password) {
					return Promise.reject('Password not Match');
				}
				console.log('it has benn passed 000000000----------------')

				let {username, password, _id} = user;
				return {username, password, _id};
            });
    }

    @profile
    signup({ username, password, email, gender }) {

        // throw new Error('just for fun');
        return this.checkUserUnique({ username })
            .then(unique => {
                console.log('unique', unique)
                if (!unique) return Promise.reject('Username is taken');
                return userService.createOne({ username, password, email, gender });
            })
            .then(({ username, _id }) => ({ username, _id }));
    }

    @profile
    checkUserUnique(query) {
        console.log(query, 'receive')
        return userService.findOne(query)
        	.then(user => user == null);
    }

}

const authService = new AuthService;

export default authService;
