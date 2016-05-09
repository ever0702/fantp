import {
	get, post
}
from '../utils/httpHelper';
import simpleStorage from '../utils/localStorage.util';
import profile from '../../isomorphic/decorators/profile.decorator';

const checkUserUnique = query => {
	let params = $.param(query);
	return get(`/check-user-unique?${params}`);
}

class AuthService {

	checkUserUnique(query) {
		let params = $.param(query);
		return get(`/check-user-unique?${params}`);
	}

	@
	profile
	signup(body) {
		return post('/signup', body)
			.then(result => {
				let {
					success, token, _id, username
				} = result;
				if (success) {
					simpleStorage.token = token;
					simpleStorage.set('username', username);
					simpleStorage.set('_id', _id);
				} else {
					simpleStorage.removeToken();
					simpleStorage.remove('_id');
					simpleStorage.remove('username');
				}

				return result;
			});
	}

	@
	profile
	signin(body) {
		return post('/signin', body)
			.then(result => {
				let {
					success, token, username, _id
				} = result;
				if (success) {
					simpleStorage.token = token;
					simpleStorage.set('username', username);
					simpleStorage.set('_id', _id);
				} else {
					simpleStorage.removeToken();
					simpleStorage.remove('_id');
					simpleStorage.remove('username');
				}
				return result;
			});
	}

	signout() {
		simpleStorage.removeToken();
		simpleStorage.remove('_id');
		simpleStorage.remove('username');
		return Promise.resolve({
			success: true
		});
	}



}

const authService = new AuthService();

export
default authService;
