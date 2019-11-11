const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res) => {
  res.render('sessions/new.ejs');
});

router.get('/users', (req, res) => {
  User.find({}, (err, allUsers) => {
    res.render('sessions/users.ejs', {users:allUsers});
  })
});

router.get('/logout', (req, res) => {
   if (req.session) {
     req.session.destroy( (err) => {
        if(err){
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    })}
  });

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/');
  })
});

router.post('/', (req, res) => {
  User.findOne({username:req.body.username}, (err, foundUser) => {
      if (foundUser === null) {
        res.redirect('/sessions/new');
      } else {
        console.log(foundUser);
        const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
        if (doesPasswordMatch) {
            req.session.username = foundUser.username;
            res.redirect('/taco');
        } else {
            res.redirect('/sessions/new');
        }
      }
  })
});

module.exports = router;
