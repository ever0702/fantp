import userService from '../user/user.service';
import { failWithMessage, successWithData } from '../utils/messageGenerator';
import profile from '../../isomorphic/decorators/profile.decorator';

class AuthService {

    // @profile
    signin({ email: inputEmail, password: inputPassword }) {
        return userService.findOne({ email: inputEmail })
            .then(user => {
                if (!user) {
                    return Promise.reject('邮箱不存在');
                }
                if (user.password != inputPassword) {
                    return Promise.reject('密码不匹配');
                }
                let { username, email, _id } = user;
                return { username, email, _id };
            });
    }

    // @profile
    signup({ username, password, email, gender }) {

        // throw new Error('just for fun');
        return this.checkUserUnique({ email })
            .then(unique => {
                console.log('unique', unique)
                if (!unique) return Promise.reject('该邮箱已被注册');
                console.log(username, password, email, gender);
                return userService.createOne({ username, password, email, gender });
            })
            .then(({ username, _id }) => ({ username, _id }));
    }

    // @profile
    checkUserUnique(query) {
        console.log(query, 'receive')
        return userService.findOne(query)
            .then(user => user == null);
    }

}

const authService = new AuthService;

export default authService;
