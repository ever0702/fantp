import {get, post} from '../utils/httpHelper';
import profile from '../../isomorphic/decorators/profile.decorator';

const checkUserUnique = query => {
	let params = $.param(query);
		return get(`/check-user-unique?${params}`);
}

class AuthService {

	checkUserUnique(query) {
		let params= $.param(query);
		return get(`/check-user-unique?${params}`);
	}

	@profile
	signup(body) {
		return post('/signup', body);
	}

}

const authService = new AuthService();

export default authService;

