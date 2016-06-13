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
                let { username, email, _id, role } = user;
                return { username, email, _id, role };
            });
    }

    // @profile
    signup({ username, password, email, gender, role }) {

        
        return this.checkUserUnique({ email })
            .then(unique => {
                console.log('unique', unique)
                if (!unique) return Promise.reject('该邮箱已被注册');
                console.log(username, password, email, gender);
                return userService.createOne({ username, password, email, gender, role });
            })
            .then(({ username, _id, role }) => ({ username, _id, role }));
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
