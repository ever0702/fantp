class BaseService {
    model = null;
    constructor(model) {
        this.model = model
    }

    findAll() {
        return this.model.find({}).exec();
    }

    findById(id) {
        return this.model.findById(id).exec();
    }

    find(query) {
        return this.model.find(query).exec();
    }

    findOne(query) {
        return this.model.findOne(query).exec();
    }

    createOne(data) {
        return this.model.create(data);
    }

    updateOne(id, config) {
    	return this.model.update({id}, config).exec();
    }

    removeById(id) {
        return this.model.findByIdAndRemove(id);
    }
}


export default BaseService;
