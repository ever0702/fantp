import {verifyToken} from '../utils/token.util';
import HttpCodes from '../../isomorphic/constants/httpCodes';
import {failWithMessage} from '../utils/messageGenerator';
const checkToken = (req, res, next) => {

	console.log(JSON.stringify(req.body));

	let token = req.body.token || req.query.token || req.headers['x-access-token'];
	if(!token) {
		return res.status(HttpCodes.UNAUTHORIZED)
			.json({
				success: false,
				message: 'No Token Provided'
			});
	}
	
	verifyToken(token).then(decoded => {
		console.log('decoded is ,', JSON.stringify(decoded));
		req.userid = decoded._id;
		next();
	})
	.catch(err=> res.status(HttpCodes.UNAUTHORIZED).send(failWithMessage('Token not valid')));
}

export default checkToken;
