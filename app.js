const express = require('express');
const connectDB = require('./db');
const app = express();

app.use(express.json({ extended: false }));

//Import Routes
const postsRoute = require('./routes/posts');
const getsRoute = require('./routes/gets');
const deletesRoute = require('./routes/deletes');
const patchesRoute = require('./routes/patches');

app.use('/', postsRoute);
app.use('/', getsRoute);
app.use('/', deletesRoute);
app.use('/', patchesRoute)


connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
