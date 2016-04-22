import mongoose from 'mongoose';

let TodoSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true
	},
	completed: Boolean,
	createTime: {
		type: Date,
		default: Date.now
	}
});

let Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
