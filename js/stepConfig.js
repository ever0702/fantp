import {normalizr} from './utils/treeUtil';

let stepConfig = [{
	index: 0,
	id: 'travelStyle',
	label: '旅行方式',
	subSteps: [{
		index: 0,
		id: 'rent',
		label: '包车',
		subSteps: [{
			index: 0,
			label: '大巴（10-16座)',
			id: 'middle'
		}, {
			index: 1,
			label: '小巴（7-10座）',
			id: 'big'
		}]

	}, {
		index: 1,
		id: 'drive',
		label:'自驾',
		subSteps: [{
			id: 'vw',
			label: '大众'
		}, {
			id:'lexus',
			label: '高端'
		}]
	}]
}, {
	index: 1,
	id: 'hLeooStyl',
	subSteps: [{
		index: 0,
		id: 'rentfff',
		subSteps: [{
			index: 0,
			id: 'middsssle'
		}, {
			index: 1,
			id: 'bigfff'
		}]

	}]
}];

stepConfig = normalizr(stepConfig, 'subSteps', 'id');
console.log(stepConfig)

export default stepConfig;
