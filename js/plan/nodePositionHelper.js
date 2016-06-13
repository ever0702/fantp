const config = {
	r1: 0.13,
	r2: 0.09,
	r3: 0.06,
	to12: 0.26,
	to23: 0.18
}

let count = 0;

const calculateNodePositions = ({
	svgWidth,
	svgHeight,
	level,
	nodeCount,
	startAngle,
	index,
	px,
	py
}) => {
	count++;
	index = index||0;
	startAngle = startAngle||0;	
	let min = Math.min(svgHeight, svgWidth) ||300;

	let {r1, r2, r3, to12, to23} = config;

	let rootCircle = {
		cx: svgWidth/2,
		cy: svgHeight/2,
		r: min * r1
	};

	if(level == 1) {
		return {
			circle: {
				...rootCircle
			},
			angle: startAngle || Math.PI*1.5
		};
	}

	let cToc = level == 2? to12: to23;
	let curR = level ==2? r2: r3;
	let parentR = level ==2? r1: r2;
	if(level > 2) {
		index++;
		nodeCount ++;
	}

	let angleOffset = 2* Math.PI*index/nodeCount;
	let tempAngle = startAngle + angleOffset;
	let curAngle = tempAngle>Math.PI? tempAngle - Math.PI: tempAngle + Math.PI;

	let circle = {
		px,
		py,
		cx: px+ cToc* min*Math.sin(curAngle),
		cy: py+ cToc* min* Math.cos(curAngle),
		r: curR * min
	};


	let line = {
		x1: px + parentR*min*Math.sin(curAngle),
		y1: py +parentR*min*Math.cos(curAngle),
		x2: circle.cx - curR*min*Math.sin(curAngle),
		y2: circle.cy - curR*min*Math.cos(curAngle)
	};

	// console.log({circle, line, angle: curAngle})
	// console.log('recaluate has run ', count);

	return {
		circle,
		line,
		angle: curAngle
	};

};

export {
	calculateNodePositions
};
