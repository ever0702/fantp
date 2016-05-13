import {get, post} from '../utils/httpHelper';

const createStepNode = body => post('/stepNodes', body);

const getStepNodes = () => get('/stepNodes');

const stepNodeService = {
	createStepNode,
	getStepNodes
}

export default stepNodeService;
