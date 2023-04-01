const AplicationSchema = require('../config/databases/mongodb/models/aplication')

class AplicationService {
    async all() {
        try {
            return await AplicationSchema.find()
        } catch (error) {
            throw new Error(error)
        }
    }
    async create(data) {
        try {
            const schema = await new AplicationSchema(data).save();
            return schema;
        } catch (error) {
            return `internal error -> " ${error}`;
        }
    }
    async info(id){
        try {
            return await AplicationSchema.findById(id)
        } catch (error) {
            throw new Error(error)
        }
    }
    async update(id, data){
        try {
            return await AplicationSchema.findByIdAndUpdate(id, data)
        } catch (error) {
            throw new Error(error)
        }
    }
    async delete(id){
        try {
            return await AplicationSchema.findByIdAndDelete(id)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = new AplicationService()