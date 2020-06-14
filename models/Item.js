const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('Item', ItemSchema);