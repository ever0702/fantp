const isInteger = str => {
	var n = ~~ Number(str);

	return String(n) === str;
}

const isPositiveInteger = str => isInteger(str) && parseInt(str) > 0;

export {isInteger, isPositiveInteger};
