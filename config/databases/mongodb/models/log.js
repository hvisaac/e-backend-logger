const { Schema, model, Types } = require('mongoose');

const logsSchema = new Schema({
    aplication_id: Types.ObjectId,
    type: String,
    priority: String,
    path: String,
    message: String,
    request: {
        data: Schema.Types.Mixed
    },
    response: {
        data: Schema.Types.Mixed
    }
}, {
    timestamps: true
});

module.exports = model('logs', logsSchema);