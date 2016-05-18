import mongoose from 'mongoose';

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
