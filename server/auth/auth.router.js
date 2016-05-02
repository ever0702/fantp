import { Router } from 'express';
import userService from '../user/user.service';
import authService from './auth.service';
import { failWithMessage, successWithData } from '../utils/messageGenerator';
import { badRequest, serviceError } from '../utils/webResponse.util';
import profile from '../../isomorphic/decorators/profile.decorator';
import routerException from '../../isomorphic/decorators/routerException.decorator';
import routerExceptionHandler from '../../isomorphic/decorators/routerExceptionHandler.decorator';
import { signToken, verifyToken } from '../utils/token.util';

// @routerExceptionHandler
class AuthHandler {
    constructor(io) {
        this.io = io;
    }

    signin(req, res) {
        let { username, password } = req.body;

        authService.signin({ username, password })
            .then(user => signToken({ user }).then(
                    token => res.send({ token, ...user }),
                    err => badRequest(res, failWithMessage('Fail to generate Token'))
                ),
                err => {
					console.log(err);
                	badRequest(res, failWithMessage('what the hell'))
                }
            );
    }

    signup(req, res) {
        let { username, password, email, gender } = req.body;
        return authService.signup({ username, password, email, gender })
            .then(user => signToken({user}).then(
					token => res.send({token, ...user}),
					err => badRequest(res, failWithMessage('Fail to generate Token'))
            	),
                err => badRequest(res, failWithMessage(err))
            );
    }

    checkUserUnique(req, res) {
        let { username, email } = req.query;
        console.log(username, email)
        let query = {};
        if (username) query.username = username;
        if (email) query.email = email;

        console.log('query is ', JSON.stringify(query))

        authService.checkUserUnique(query)
            .then(unique => res.send({ unique }));
    }
}

const authRouter = io => {
    let authHandler = new AuthHandler(io);

    let router = Router();

    router.post('/signin', authHandler.signin);

    router.post('/signup', authHandler.signup);

    router.get('/check-user-unique', authHandler.checkUserUnique);

    return router;
}

export default authRouter;
