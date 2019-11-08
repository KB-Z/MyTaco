const express = require('express');
const app = express();
const Taco = require('./models/tacos.js')
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session({
  secret:'feedmeseymour',
  resave:false,
  saveUninitialized:false
}));


app.listen(3000, (req, res) => {
  console.log('Hola!');
});
