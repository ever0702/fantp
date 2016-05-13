import BaseService from '../utils/base.service';

import StepNode from './stepNode.model';


class StepNodeService extends BaseService {
	constructor() {
		super(StepNode);
	}
}

const stepNodeService = new StepNodeService();

export default stepNodeService;
