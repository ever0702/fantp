import { post } from '../utils/httpHelper';
import simpleStorage from '../utils/localStorage.util';

const httpSignin = (data) => post('/signin', data)
    .then(result => {
        let { success, token } = result;
        if (success) {
            simpleStorage.token = token;
        } else {
            simpleStorage.removeToken();
        }
        return result;
    });

const httpSignup = (data) => post('/signup', data)
    .then(result => {
        let { success, token } = result;
        if (success) {
            simpleStorage.token = token;
        } else {
            simpleStorage.removeToken();
        }

        return result;
    })

export { httpSignup, httpSignin };
