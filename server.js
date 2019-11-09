const express = require('express');
const app = express();
// const Taco = require('./models/tacos.js')
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const db = mongoose.connection;
require('dotenv').config();
const PORT = process.env.PORT;

console.log(PORT);

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true }, () => {
    console.log('connected to mongoose');
  });

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
// app.use(express.json());
app.use(session({
  secret:'feedmeseymour',
  resave:false,
  saveUninitialized:false
}));

app.get('/', (req, res) => {
  res.render('home.ejs');
})

app.listen(PORT, () => {
  console.log('Hola!');
});
