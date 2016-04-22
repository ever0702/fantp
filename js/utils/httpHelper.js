import fetch from 'isomorphic-fetch';

const parseResponse = res => {
    const { status } = res;
    return status === 200 ? res.json() : Promise.reject(res);
}

const checkStatus = res => {
    if (res.status >= 200 && res.status < 300) {
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

const send = ({ url, method = 'get', data = {}, config = {} }) => {
    let body = data;
    if (typeof data == 'object') {
        body = JSON.stringify(data);
    }

    let httpConfig = { method, ...config, headers: jsonHeader };
    if (method != 'get' && data != null) {
        httpConfig.body = body;
    }
    return fetch(url, httpConfig)
        .then(checkStatus)
        .then(r => r.json());

};

const get = url => send({ url });
const postJSON = (url, data = {}, config) => send({ url, data, method: 'post', config });
const post = (url, data = {}, config) => send({ url, data, method: 'post', config });
const put = (url, data = {}, config) => send({ url, data, method: 'put', config });
const deletex = (url, data = {}, config) => send({ url, data, method: 'delete', config });

export {get, post, postJSON, put, deletex };
