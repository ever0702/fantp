class BaseService {
    constructor(model) {
        this.model = model
    }

    findAll() {
        return this.model.find({}).exec();
    }

    findById(_id) {
        return this.model.findById(_id).exec();
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

    updateOne(_id, config) {
    	return this.model.update({_id}, config).exec();
    }

    removeById(_id) {
        return this.model.findByIdAndRemove(_id);
    }
}


export default BaseService;
