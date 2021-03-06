class LocalStorageWrapper {
    set(key, value) {
        let v = value;
        if (typeof value == 'object') {
            v = JSON.stringify(value);
        }

        localStorage.setItem(key, v);
    }

    get(key) {
        const res = localStorage.getItem(key);
        try{
            if(res === null) {
                return undefined;
            }
            return JSON.parse(res);
        } catch(err) {
            if(typeof res === 'string')
                return res;
            return undefined;
        }

        // let res = localStorage.getItem(key);
        // try {
        //     return JSON.parse(res);
        // } catch (err) {
        //     return res;
        // }
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    get token() {
        return this.get('token');
    }

    set token(value) {
        this.set('token', value);
    }

    removeToken() {
    	this.remove('token');
    }

}

const storageInstance = new LocalStorageWrapper();

export default storageInstance;
