const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

const flash = require('connect-flash');

// const initializePassport = require('./config/passport-config');

app.use(session({ secret: 'secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(flash());

const passportConfig = require('./config/passport-config');
// const users = require('./storage/users'); // Make sure this path is correct
passportConfig.initialize(
    passport,
    passportConfig.getUserByEmail, // Now this should correctly reference the exported function
    passportConfig.getUserById
);

const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);

app.get('/', (req, res) => {
    res.render('index.ejs', { user: req.user });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist!');
});



app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('server started at port 3000');
});