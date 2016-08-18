import mongoose from 'mongoose';

let StepNodeSchema = new mongoose.Schema({
	order: Number,
	label: {
		type: String,
		trim: true
	},
	parent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'StepNode'
	},
	price: Number,
 	subTitle: {
		type: String,
		trim: true
	},
	createTime: {
		type: Date,
		default: Date.now
	}
});

let StepNode = mongoose.model('StepNode', StepNodeSchema);

export
default StepNode;
