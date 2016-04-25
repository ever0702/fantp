import {get, post} from '../utils/httpHelper';

const checkUserUnique = query => {
	let params = $.param(query);
		return get(`/check-user-unique?${params}`);
}

class AuthService {

	checkUserUnique(query) {
		let params= $.param(query);
		return get(`/check-user-unique?${params}`);
	}

	signup(body) {
		return post('/signup', body);
	}

}

const authService = new AuthService();

export default authService;

