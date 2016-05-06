import Emitter from 'events';

const ws = {
    handle(data) {
        console.log(data);
    }
}


class RStream extends Emitter {

    constructor(source) {
        super(source);
        this.src = source;
    }
    start() {
        for (let i of this.src) {
            setTimeout(() => {
                this.emit('data', i);
            }, 1500);
        }

        return this;
    }

    pipe(ws) {
        this.on('data', data => ws.handle(data));
        return ws;
    }

}

class Duplex extends RStream {

    handle(data) {
        console.log('duplex handle data ', data);
        if (data % 2 == 0)
            this.emit('data', data);
    }

    pipe(ws) {
        this.on('data', data => {
            ws.handle(data);
        });
        return ws;
    }

}

const rs = new RStream([1, 2, 3, 4, 5]);

rs.start().pipe(new Duplex()).pipe(ws);
