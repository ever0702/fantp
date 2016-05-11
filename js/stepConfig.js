import {normalizr} from './utils/treeUtil';

let stepTree = [{
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
			id: 'middle',
			subSteps: [
				{
					id: 'oilBigBus',
					label: '大油车'
				},
				{
					id: 'smallBigBus',
					label: 'small油车'
				}
			]
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
	label:'Hilari',
	subSteps: [{
		index: 0,
		id: 'rentfff',
		label:'cliton',
		subSteps: [{
			index: 0,
			label:'WTF',
			id: 'middsssle'
		}, {
			index: 1,
			label:'inters',
			id: 'bigfff'
		}]

	}]
}];

let stepFlat = normalizr(stepTree, 'subSteps', 'id', 'parentStep', 'childSteps');
console.log(stepFlat)

export  {stepFlat, stepTree};
