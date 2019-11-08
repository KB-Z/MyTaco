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
console.log(MONGODB_URI);

// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));
// app.use(session({
//   secret:'feedmeseymour',
//   resave:false,
//   saveUninitialized:false
// }));


// app.listen(3000, (req, res) => {
//   console.log('Hola!');
// });
