class NodeGroup {

	constructor(nodeList) {
		this.nodeList = nodeList;
	}
	set nodeList(nodeList) {
		this.nodeList = nodeList;
	}

	get nodeList() {
		return this.nodeList;
	}

	applyFn(fn, ...rest) {
		for (let c of this.nodeList) {
			c.applyFn(fn);
		}
	}
}

class NodeEntity {
	constructor(properties, group) {
		for (let [key, value] of Object.entries(properties)) {
			this[key] = value;
		}

		if (group) {
			this.group = group;
		}
	}

	setGroup(group) {
		this.group = group;
	}

	applyFn(fn, ...rest) {
		fn(this)
		if (this.group) {
			this.group.applyFn(fn);
		}
	}

}


function composeNodeGroupFromJsonArray(jsonArray, childrenPropertyName) {

	const createGroup = paramArr => {

		var nodes = [];
		for (let v of paramArr) {


			let group = null;
			if (v[childrenPropertyName] && v[childrenPropertyName].length > 0) {
				group = createGroup(v[childrenPropertyName]);

			}

			var nod = new NodeEntity(v, group);
		}

		var newGroup = new NodeGroup(nodes);

		console.log(newGroup);
		return newGroup;

	}

	var createdGroup = createGroup(jsonArray);

	console.log('final ', createdGroup)
	return createdGroup;
}

export {
	NodeGroup, NodeEntity, composeNodeGroupFromJsonArray
};
