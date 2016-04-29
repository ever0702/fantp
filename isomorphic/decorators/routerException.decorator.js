const routerExcp = (targer, name, descriptor) => {

    let original = descriptor.value;

    descriptor.value = async (req, res, next) => {
        try {
	        let result = await original.call(this, req, res, next);
        } catch(err) {
            res.status(500).send({msaage: err.message || 'Service Error'});
        }

    }
};

export default routerExcp;
