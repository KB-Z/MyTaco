const mongoose = require('mongoose');

const tacoSchema = new mongoose.Schema({
  base:[type:String, required:true],
  seasoning:[type:String, required:true],
  mixin:[type:String, required:true],
  shell:[type:String, required:true],
  condiment:[type:String, required:true],
},{timestamps:true});

const Taco = mongoose.model('Taco', tacoSchema);

module.exports = Taco;
