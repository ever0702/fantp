import { hashHistory } from 'react-router';

const applyHttpInterceptors = (...interceptors) => fn => {

	for(let ic of interceptors) {
		fn = ic(fn);
	}

	return fn;
};

const redirectOnError = ({
    page401 = '/signin'
}) => target => {
    return (...args) => {
        return target.apply(null, args)
            .catch(err => {
                if (err.status == 401) {
                    console.log('unauthorize detected 00000000000000000000kkAjA;');
                    hashHistory.push(page401);

                }
                return Promise.reject(err);
            })
    }
};

const httpTime = () => target => {

    return (...args) => {
        let startTime = new Date();
        return target.apply(null, args)
            .then(res => {
                console.log('finish executing......', (new Date() - startTime));
                return res;
            }, err => {
                console.log('finish executing......', (new Date() - startTime));
                return Promise.reject(err);
            });
    }
}

export {applyHttpInterceptors, redirectOnError, httpTime };
