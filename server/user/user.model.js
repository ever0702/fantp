import mongoose from 'mongoose';
import {USER, ADMIN, STAFF} from '../../isomorphic/constants/userRoles';

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true
	},
	password: {
		type: String,
		trim: true
	},
	username: {
		type: String,
		trim: true
	},
	createTime: {
		type: Date,
		default: Date.now
	},
	role: {
		type: String,
		enum: [USER, ADMIN, STAFF]
	}
});

let User = mongoose.model('User', UserSchema);

export default User;

// ,
// 	gender: {
// 		type: String,
// 		enum: ['M', 'F'],
// 		trim: true
// 	}
