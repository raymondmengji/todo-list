const express = require('express');
const connectDB = require('./db');
const app = express();

app.use(express.json({ extended: false }));

//Import Routes
const postsRoute = require('./routes/posts');
const getsRoute = require('./routes/gets');

app.use('/', postsRoute);
app.use('/', getsRoute);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
