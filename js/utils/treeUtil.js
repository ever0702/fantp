const findPath = (treeArray, subName, predicate) => {
    let fn = predicate;

    let path = [];
}

const setPropertyWhenNodeChildrenContains = (tree, subName, propertyName, trueValue, falseValue, fnPredicate) => {
    var inner = function(tree) {
        var contains = false;
        tree.forEach(function(node) {
            if (fnPredicate(node)) {
                contains = true;
            }
            if (!node[subName] || node[subName].length == 0) {
                node[propertyName] = falseValue;
                return;
            }
            var has = inner(node[subName]);
            if (has) {
            	console.log('find a true')
                node[propertyName] = trueValue;

            } else {
                node[propertyName] = falseValue;
            }
        });
        return contains;
    };
    inner(tree);
    return tree;
}

const normalizr = (tree, subName, keyName) => {
	let result = {};
	
	let inner = (tempArr) => {
		tempArr.forEach(item => {
			let children = item[subName];
			delete item[subName];
			let toAdd = {...item};
			if(children) {
				toAdd[subName] = children.map(c => c[keyName]);
			}
			result[item[keyName]] = toAdd;
			if(children && children.length > 0) {
				inner(children);
			}
		})
	}

	inner(tree);
	console.log(result);
	return result;
};

export {
    findPath,
    setPropertyWhenNodeChildrenContains ,
    normalizr
};
