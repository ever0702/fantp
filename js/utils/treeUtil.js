const findPath = (treeArray, subName, predicate) => {
    let fn = predicate;

    let path = [];
}


const fnWHenNodeChildrenContains = (tree, subName, fnPredicate, trueFn, falseFn) => {
	const inner = root => {
		let contains = false;
		if(fnPredicate(root)) {
			contains = true;
		}


	}

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

const normalizr = (tree, subName, keyName, parentName='parent', childrenName ='pchildren') => {
	let result = {};
	
	let inner = (tempArr, parentKey) => {
		tempArr.forEach(item => {
			let children = item[subName];
			delete item[subName];
			let toAdd = {...item};
			if(parent) 
				toAdd[parentName] = parentKey;
			if(children) {
				toAdd[childrenName] = children.map(c => c[keyName]);
			}
			result[item[keyName]] = toAdd;
			if(children && children.length > 0) {
				inner(children, item[keyName]);
			}
		})
	}

	inner(tree, null);
	console.log(result);
	return result;
};


export {
    findPath,
    setPropertyWhenNodeChildrenContains ,
    normalizr
};
