import {Router} from 'express';
import userService from './user.service';
import {validatePassword} from '../../isomorphic/utils/accountUtils';
import checkToken from '../middlewares/checkToken';
import {failWithMessage} from '../utils/messageGenerator';

const userRouter = io => {

	let router = Router();
	router.use(checkToken);

	router.get('/session-user-basic-info', (req, res) => {
		let {userId} = req;
		return userService.findById(userId)
			.then(user => {
				let {password, ...rest} = user? user.toObject(): {};
				res.send(rest);
			});
	});

	router.put('/session-user/password', (req, res) => {
		let {userId} = req;
		let {oldPassword, newPassword} = req.body;
		userService.updatePassword(userId, oldPassword, newPassword)		
			.then(user => {
				console.log(JSON.stringify(user));
				res.send({success: true})
			})
			.catch(err => {
				console.log(err)
				res.send(failWithMessage(err))
			});

	});

	router.put('/session-user', (req, res) => {
		let {userId} = req;
		let {username, areaCode, phone} = req.body;

		userService.updateBasicInfo(userId, {username, areaCode, phone})
			.then(result => res.send(result))
			.catch(err => {
				console.log(err);
				res.send(err);
			})
	})

	return router;
};

export default userRouter;
