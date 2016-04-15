import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const parseResponse = res => {
    const {status} = res;
    return status === 200? res.json() : Promise.reject(res);

}

const checkStatus = res => {
    if(res.status >=200 && res.status <300) {
        return res;
    }

    let err = new Error(res.statusText);
    err.response = res;
    throw err;
}

const parseJson = res => res.json();

const jsonHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const get = (url, queryParams) => {
    // return fetch(url).then(r =>{console.log(r); return r.json()});
    return fetch(url)
        .then(checkStatus)
        .then(parseJson);
}

const post = (url, data = {}, config) => {
    if (typeof data == 'object') {
        data = JSON.stringify(data);
    }

    return fetch(url, {
        method: 'POST',
        body: data,
        ...config
    }).then(r => r.json());
};

const postJSON = (url, data = {}, config) => {
    config = {...config, headers: jsonHeader };
    return post(url, data, config);
}

export {get, post, postJSON};
