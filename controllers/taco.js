const express = require('express');
const Taco = require('../models/tacos.js')
const router = express.Router();

router.get('/new_taco', (req, res) => {
  res.render('taco/new.ejs', {username:req.session.username});
});

router.get('/:id/edit', (req, res) => {
  Taco.findById(req.params.id, (err, foundTaco) => {
    res.render('taco/edit.ejs', {taco:foundTaco});
  })
});

router.delete('/:id', (req, res) => {
  Taco.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/taco');
  })
});

router.put('/:id', (req, res) => {
  Taco.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedModel) => {
      res.redirect('/taco');
    })
  });

  router.get('/my_tacos', (req, res) => {
    Taco.find({}, (err, allTacos) => {
      res.render('taco/show.ejs', {tacos:allTacos, username:req.session.username});
    });
  });

  router.post('/', (req, res) => {
    Taco.create(req.body, (err, newTaco) => {
      res.redirect('/taco');
    })
  });

  router.get('/', (req, res) => {
    Taco.find({}, (err, allTacos) => {
      res.render('taco/index.ejs', {tacos:allTacos, username:req.session.username});
    });
  });

module.exports = router;
