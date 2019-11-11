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

app.locals.saveTaco = () => {
  if (typeof(Storage) !== "undefined") {
    localStorage.tacoid = tacoid
  }
};

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
// app.use(express.json());
app.use(session({
  secret:'feedmeseymour',
  resave:false,
  saveUninitialized:false
}));

const tacoController = require('./controllers/taco.js');
app.use('/taco', tacoController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.get('/', (req, res) => {
  res.render('home.ejs', {username:req.session.username});
});

app.listen(PORT, () => {
  console.log('Hola!');
});

  // window.onscroll = function() {stickyNav()};
  // var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;
  // function stickyNav() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
