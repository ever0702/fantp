import {get, post } from '../utils/httpHelper';
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

    @profile
    signup(body) {
        return post('/signup', body)
            .then(result => {
                let { success, token } = result;
                if (success) {
                    simpleStorage.token = token;
                } else {
                    simpleStorage.removeToken();
                }

                return result;
            });
    }

    @profile
    signin(body) {
        return post('/signin', body)
            .then(result => {
                let { success, token } = result;
                if (success) {
                    simpleStorage.token = token;
                } else {
                    simpleStorage.removeToken();
                }
                return result;
            });
    }

    signout() {
    	simpleStorage.removeToken();
    	return Promise.resolve({success: true});
    }



}

const authService = new AuthService();

export default authService;
