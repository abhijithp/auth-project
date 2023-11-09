const express = require('express');
const router = express.Router();

const passport = require('passport');
const bcrypt = require('bcrypt');
const users = require('../storage/users');

router.get('/login', (req, res) => {
    res.render('login', { messages: req.flash('error') });
});

router.get('/register', (req, res) => {
    res.render('register', { messages: req.flash('error') }); // Or any other messages you want to pass
});  

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPassword,
        });
        res.redirect('/login');
    } catch (error) {
        res.redirect('/register');
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) { 
        console.error(err);
        return next(err);
      }
      if (!user) { 
        console.log('Login failed', info);
        return res.redirect('/login'); 
      }
      req.logIn(user, (err) => {
        if (err) { 
          console.error(err);
          return next(err);
        }
        return res.redirect('/');
      });
    })(req, res, next);
  });

module.exports = router;