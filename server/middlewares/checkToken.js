import {verifyToken} from '../utils/token.util';
const checkToken = (req, res, next) => {

	console.log(JSON.stringify(req.body));

	let token = req.body.token || req.query.token || req.headers['x-access-token'];
	if(!token) {
		return res.status(400)
			.json({
				success: false,
				message: 'No Token Provided'
			});
	}


}
