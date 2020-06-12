const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: {
        type: Array,
        default: []
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('users', UserSchema);
