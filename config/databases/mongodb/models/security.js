const { Schema, model } = require('mongoose');

const securitySchema = new Schema({
    token: String
}, {
    timestamps: true
});

module.exports = model('securities', securitySchema);