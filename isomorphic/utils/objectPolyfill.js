const containStr = (obj, str, sensitive = false) => {
	if (typeof obj !== 'object') {
		if (sensitive) {
			return String(obj).indexOf(String(str)) > -1;
		} else {

		}
	}
	for (let v of Object.values(obj)) {
		if (String(v).indexOf(str) > -1) {
			return true;
		}
	}
	return false;
}


if (!Object.prototype.filterPipe) {

	Object.defineProperty(Object.prototype, 'filterPipe', {
		enumerable: false,
		writable: false,
		value: function(toCompare, ...args) {

			let self = this;
			let isFunction = typeof toCompare === 'function';
			let isArray = Array.isArray(self);


			if (isFunction) {
				if (isArray) {
					return self.filter(item => toCompare.apply(null, [item].concat(args)));
				} else {
					return toCompare.apply(null, [self].concat(args));
				}
			} else {
				let val = String(toCompare);

				if (isArray) {
					return self.filter(item => containStr(item, toCompare));
				} else {
					return containStr(this, toCompare) ? this : null;
				}
			}
		}
	})

}

if (!Object.prototype.sortPipe) {
	Object.defineProperty(Object.prototype, 'sortPipe', {
		enumerable: false,
		writable: false,
		value: function(toCompare, order = true) {

			if (!Array.isArray(this)) return this;

			if (toCompare === undefined) {
				order = true;
			} else if (typeof toCompare == 'boolean') {
				order = toCompare;
				toCompare = null;
			}

			return this.sort((s1, s2) => {
				if (typeof s1 === 'object') {
					if (s1[toCompare] == s2[toCompare]) return 0;
					return s1[toCompare] > s2[toCompare] === order ? 1 : -1;
				} else {
					if (s1 === s2) return 0;
					return s1 > s2 === order ? 1 : -1;
				}
			})

		}
	})
}


if (!Object.prototype.sliceProps) {
	Object.defineProperty(Object.prototype, 'sliceProps', {
		enumerable: false,
		writable: false,
		value: function() {
			if (typeof this != 'object') return this;
			let result = {};
			for (let key of arguments) {
				result[key] = this[key];
			}

			return result;
		}
	})
}

if (!Object.prototype.overrideProps) {
	Object.defineProperty(Object.prototype, 'overrideProps', {
		enumerable: false,
		writable: false,
		value: function(target) {
			if (typeof this != 'object') return this;

			let result = {...this};

			for(let key in this) {
				if(target[key])
					result[key] = target[key];
			}

			return result;
		}
	})
}
