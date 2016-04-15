import Rx from 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';

const events = ['click', 'keyup', 'keydown', 'mousemove', 'mousedown', 'change'];

let RxDom = {};

for (let evt of events) {
    RxDom[evt] = elm => Rx.Observable.fromEvent(evt, elm);
}

export default RxDom;
