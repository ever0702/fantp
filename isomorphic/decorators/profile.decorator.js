const profile = (target, name, descriptor) => {
    let originalFn = descriptor.value;

    const asyncCall = originalFn => async(...args) => {
        let time = new Date(); 
        try {
            console.log('args', args)
            let result = await originalFn.apply(target, args);
            console.log(`****** Fulfilled EXECUTE [${name}] Elapsed Time ${new Date() - time} ms`);
            return result;
        } catch(err) {
            console.log(`****** REJECTED EXECUTE [${name}] Elapsed Time ${new Date() - time} ms`);
            throw err;
        }
    }

    descriptor.value = asyncCall(descriptor.value);

    Object.defineProperty(target, name, descriptor);

}


export default profile;
