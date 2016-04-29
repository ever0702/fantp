const profile = (target, name, descriptor) => {
    let originalFn = descriptor.value;
    descriptor.value = function() {
        let time = new Date();

        console.log('*********** start executing ', name);
        console.log('arguments--', arguments);
        let result = originalFn.call(this, arguments);
        if (result.then) {
            return result.then(res => {
            	console.log('RESPONSE is ', res);
                console.log(`****** Fulfilled EXECUTE [${name}] Elapsed Time ${new Date() - time} ms`);
                return res;
            }, err => {
                console.log(`****** Rejected EXECUTE [${name}] Elapsed Time ${new Date() - time} ms`);
            	console.log('RESPONSE is ', res);
                return res;
            })
        } else {
            console.log(`****** Finish EXECUTE [${name}] Elapsed Time ${new Date() - time} ms`);
        	console.log('RESPONSE is ', res);
            return result;
        }
    }
}


export default profile;
