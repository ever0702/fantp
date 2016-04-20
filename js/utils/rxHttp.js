import Rx from 'rxjs/Rx';
// import {get, post} from 'jquery';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const jsonHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const rxGet = (url, queryParams) => {


    return Rx.fromPromise(fetch(url));
}

const rxPost = (url, data = {}, config) => {

}

const rxPostJson = (url, data = {}, config) => {

    if (typeof data == 'object') {
        data = JSON.stringify(data);
    }

    return Rx.fromPromise(fetch(url, {
        method: 'POST',
        header: jsonHeader,
        body: data
    }));

}

export { rxGet, rxPost, rxPostJson };
