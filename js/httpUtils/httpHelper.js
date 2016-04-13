import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const jsonHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const get = (url, queryParams) => {
    return fetch(url).then(r => r.json());
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
