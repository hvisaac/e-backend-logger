const { Schema, model, Types } = require('mongoose');

const authorizationsSchema = new Schema({
    aplication_id: Types.ObjectId,
    token: String
}, {
    timestamps: true
}
);

module.exports = model('authorizations', authorizationsSchema);