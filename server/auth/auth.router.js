import { Router } from 'express';
import userService from '../user/user.service';
import authService from './auth.service';
import { failWithMessage, successWithData } from '../utils/messageGenerator';
import { badRequest, serviceError } from '../utils/webResponse.util';
import profile from '../../isomorphic/decorators/profile.decorator';
import routerException from '../../isomorphic/decorators/routerException.decorator';
import routerExceptionHandler from '../../isomorphic/decorators/routerExceptionHandler.decorator';

@routerExceptionHandler
class AuthHandler {
    constructor(io) {
        this.io = io;
    }

    signup(req, res) {
        let { username, password, email, gender } = req.body;
        return authService.signup({ username, password, email, gender })
            .then(data => {
                    res.send(data)
                },
                err => badRequest(res, failWithMessage(err))
            );
    }

    checkUserUnique(req, res) {
    	let {username, email} = req.query;
        let query = {};
        if (username) query.username = username;
        if (email) query.email = email;

        return authService.checkUserUnique(query)
            .then(unique => res.send({ unique }));
    }
}

const authRouter = io => {
    let authHandler = new AuthHandler(io);

    let router = Router();

    router.post('/signup', authHandler.signup);

    router.get('/check-user-unique', authHandler.checkUserUnique);

    return router;
}

export default authRouter;
