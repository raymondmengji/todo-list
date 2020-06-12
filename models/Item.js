const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Item', ItemSchema);