const SecuritySchema = require('../config/databases/mongodb/models/security')

class SecurityService {
    async getToken() {
        try {
            return (await SecuritySchema.find())[0].token
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = new SecurityService()