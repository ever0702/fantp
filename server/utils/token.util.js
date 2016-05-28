import  jwt from 'jsonwebtoken';
import {config} from '../app.config';
import  moment from 'moment';

let defaultSignOptions = {
	expiresInMinutes: 200
};


const signToken = (payload, options) => {
	let exp = new Date();
	exp.setMinutes(exp.getMinutes() + config.tokenExpiresInMinutes);

	console.log(exp);
	payload.exp = exp.getTime();
	console.log(payload);

	let token = jwt.sign(payload, config.secret, options);
	return Promise.resolve(token);
}

const verifyToken = token => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, config.secret, (err, decoded) => {
			if(err){
				console.log(JSON.stringify(err), 'TOEKN verify failed');
				return reject(err);
			}
			console.log(JSON.stringify(decoded));
			resolve(decoded);
		})
	});
}

export {signToken, verifyToken};

