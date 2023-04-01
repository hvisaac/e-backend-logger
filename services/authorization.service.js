const AuthorizationSchema = require('../config/databases/mongodb/models/authorization')

class AuthorizationService {
    async all() {
        try {
            return await AuthorizationSchema.find()
        } catch (error) {
            throw new Error(error)
        }
    }
    async create(data) {
        try {
            const schema = await new AuthorizationSchema(data).save();
            return schema;
        } catch (error) {
            return `internal error -> " ${error}`;
        }
    }
    async info(id){
        try {
            return await AuthorizationSchema.findById(id)
        } catch (error) {
            throw new Error(error)
        }
    }
    async update(id, data){
        try {
            return await AuthorizationSchema.findByIdAndUpdate(id, data)
        } catch (error) {
            throw new Error(error)
        }
    }
    async delete(id){
        try {
            return await AuthorizationSchema.findByIdAndDelete(id)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = new AuthorizationService()