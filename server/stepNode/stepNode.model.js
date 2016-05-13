import mongoose from 'mongoose';

let StepNodeSchema = new mongoose.Schema({
	order: Number,
	label: {
		type: String,
		trim: true
	},
	parent: {type: mongoose.Schema.Types.ObjectId, ref: 'StepNode'},
	createTime: {
		type: Date,
		default: Date.now
	}
});

let StepNode = mongoose.model('StepNode', StepNodeSchema);

export default StepNode;
