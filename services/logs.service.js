const LogsSchema = require('../config/databases/mongodb/models/log')

class LogsService {
    async all() {
        try {
            return await LogsSchema.find()
        } catch (error) {
            throw new Error(error)
        }
    }
    async create(data) {
        try {
            const schema = await new LogsSchema(data).save();
            return schema;
        } catch (error) {
            return `internal error -> " ${error}`;
        }
    }
    async info(id){
        try {
            return await LogsSchema.findById(id)
        } catch (error) {
            throw new Error(error)
        }
    }
    async update(id, data){
        try {
            return await LogsSchema.findByIdAndUpdate(id, data)
        } catch (error) {
            throw new Error(error)
        }
    }
    async delete(id){
        try {
            return await LogsSchema.findByIdAndDelete(id)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = new LogsService()