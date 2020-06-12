const express = require('express');
const connectDB = require('./db');
const app = express();
const passport = require("passport");

app.use(express.json({ extended: false }));

//Import Routes
//const postsRoute = require('./routes/posts');
const getsRoute = require('./routes/gets');
const deletesRoute = require('./routes/deletes');
const patchesRoute = require('./routes/patches');
// const passport = require('./passport');
const usersRoute = require('./routes/users');

//app.use('/', postsRoute);
app.use('/', getsRoute);
app.use('/', deletesRoute);
app.use('/', patchesRoute)


connectDB();

//Passport middleware
app.use(passport.initialize());

require('./passport')(passport);


app.use('/', usersRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
