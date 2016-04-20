const REQUEST_SURFIX = '_REQUEST',
    SUCCESS_SURFIX = '_SUCCESS',
    ERROR_SURFIX = '_ERROR';

function HttpAction(target, name, descriptor) {
    console.log(target, name, descriptor);

    const OriValue = target[name];

    let newValue = {
        [name + REQUEST_SURFIX]: OriValue + REQUEST_SURFIX,
        [name + SUCCESS_SURFIX]: OriValue + SUCCESS_SURFIX,
        [name + ERROR_SURFIX]: OriValue + ERROR_SURFIX
    };

    descriptor = {...descriptor, value: newValue};

    Object.defineProperty(target, name, descriptor);

    console.log(newValue);

    // target[name] = newValue;
    console.log(target)



};

export default HttpAction;
