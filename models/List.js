const mongoose = require('mongoose');
const moment = require('moment');

const ListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "List for: " + moment().format("MMM Do YY")
    },
    items: {
        type: Array,
        default: []
    },
    time: {
        type: String,
        default: moment().format("MMM Do YY")
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('List', ListSchema);