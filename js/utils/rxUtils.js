

const events = ['keyup', 'keydown', 'mousemove', 'click', 'mousedown', 'mouseup', 'change'];

let RxDom ={};

for(let evt of events) {
	RxDom[evt] = elm => Rx.Observable.fromEvent(elm, evt);
}

const keyUpEvents = {
	enter: 13,
	leftArrow: 37,
	rightArrow: 39,
	downArrow: 40,
	upArrow:38,
	ctrlUp: 17,
	shiftUp: 16,
	escape: 27
}

const keyDownEvents = {
	ctrlDown: 17,
	shiftDown: 16
}

for(let [k, v] of Object.entries(keyUpEvents)) {
	RxDom[k] = elm => RxDom.keyup(elm).filter(e => e.keyCode == v);
}

for(let [k, v] of Object.entries(keyDownEvents)) {
	RxDom[k] = elm => RxDom.keydown(elm).filter(e => e.keyCode == v);
}

RxDom.enter = elm => RxDom.keyup(elm).filter(e => e.keyCode == 13);
global.RxDom = RxDom;
let Observable = Rx.Observable;

export {Rx, RxDom, Observable};
