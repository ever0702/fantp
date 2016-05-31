const config = {
	r1: 0.15,
	r2: 0.08,
	r3: 0.05,
	to12: 0.27,
	to23: 0.17
}


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
	index = index||0;
	startAngle = startAngle||0;	
	let min = Math.min(svgHeight, svgHeight) || 300;

	let {r1, r2, r3, to12, to23} = config;

	let rootCircle = {
		cx: min/2,
		cy: min/2,
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
	if(level > 2) {
		index++;
		nodeCount ++;
	}

	let angleOffset = 2* Math.PI*index/nodeCount;
	let tempAngle = startAngle + angleOffset;
	let curAngle = tempAngle>Math.PI? tempAngle - Math.PI: tempAngle + Math.PI;

	let circle = {
		cx: px+ cToc* min*Math.sin(curAngle),
		cy: py+ cToc* min* Math.cos(curAngle),
		r: curR * min
	};


	let line = {
		x1: px,
		y1: py,
		x2: circle.cx,
		y2: circle.cy
	};

	console.log({circle, line, angle: curAngle})

	return {
		circle,
		line,
		angle: curAngle
	};

};

export {
	calculateNodePositions
};
