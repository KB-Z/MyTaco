const mongoose = require('mongoose');

const tacoSchema = new mongoose.Schema({
  title:String,
  entry:String,
  shipIsBroken:{type:Boolean, default:true}
},{timestamps:true});

const Taco = mongoose.model('Taco', tacoSchema);

module.exports = Taco;
