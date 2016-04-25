import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true
	},
	password: {
		type: String,
		trim: true
	},
	email: {
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
