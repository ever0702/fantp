import { Router } from 'express';
import userService from '../user/user.service';


const authRouter = io => {
    let router = Router();

    router.post('/signup', (req, res) => {
        let { username, password, email } = req.body;
		
		userService.createOne({username, password, email})
			.then(user => res.send(user));
		
    });

    router.get('/check-user-unique', (req, res) => {
        let username = req.param('username');
        let email = req.param('email');

        let query = {};
        if(username) query.username = username;
        if(email) query.email = email;

        console.log('checking unique for ', query);
        userService.find(query)
            .then(usr => res.send({ unique: usr == null }))
    });

	return router;
}

export default authRouter;
