import navHistory from './navHistory';

const applyHttpInterceptors = (...interceptors) => fn => {

	for(let ic of interceptors) {
		fn = ic(fn);
	}

	return fn;
};

const redirectOnError = config => target => {
    return (...args) => {
        return target.apply(null, args)
            .catch(err => {
				
				for(let [k, v] of Object.entries(config)) {
					if(err.status == k) 
						navHistory.push(v);
				}

                // if (err.status == 401) {
                //     console.log('unauthorize detected 00000000000000000000kkAjA;');
                //     navHistory.push(page401);

                // }
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
