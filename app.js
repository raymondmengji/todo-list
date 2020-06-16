const express = require('express');
const connectDB = require('./db');
const app = express();
const passport = require("passport");
const path = require("path");

app.use(express.json({ extended: false }));

//Import Routes
//const postsRoute = require('./routes/posts');
const getsRoute = require('./routes/gets');
const deletesRoute = require('./routes/deletes');
const patchesRoute = require('./routes/patches');
// const passport = require('./passport');
const usersRoute = require('./routes/users');

//app.use('/', postsRoute);
app.use('/api', getsRoute);
app.use('/api', deletesRoute);
app.use('/api', patchesRoute)


connectDB();

//Passport middleware
app.use(passport.initialize());

require('./passport')(passport);


app.use('/', usersRoute)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
