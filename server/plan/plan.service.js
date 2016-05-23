import BaseService from '../utils/base.service';

import Plan from './plan.model';

class PlanService extends BaseService {
	constructor(){
		super(Plan);
	}
}

const planService = new PlanService();

export default planService;
