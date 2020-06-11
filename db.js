const mongoose = require('mongoose');
require('dotenv/config');

const URI = process.env.DB_CONNECTION;

const connectDB = async()=>{
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('connected to db');
};

module.exports = connectDB;