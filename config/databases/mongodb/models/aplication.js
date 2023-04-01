const { Schema, model } = require('mongoose');

const aplicationSchema = new Schema({
    name: String
}, {
    timestamps: true
});

module.exports = model('aplications', aplicationSchema);