import mongoose from 'mongoose';

let PlanSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},	
	peopleCount: Number,
	daysCount: Number,
	averageAge: Number,
	// paths: [[{type: mongoose.Schema.Types.ObjectId, ref: 'StepNode'}]],
	activeNodes: [{type: mongoose.Schema.Types.ObjectId, ref: 'StepNode'}],
	createTime: {
		type: Date,
		default: Date.now
	}
});

let PlanModel = mongoose.model('Plan', PlanSchema);

export default PlanModel;
