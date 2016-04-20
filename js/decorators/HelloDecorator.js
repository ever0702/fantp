const Hello = message => target => {
    console.log('hello decor says ', message);
    console.log('target is ', target);
};


export { Hello };
