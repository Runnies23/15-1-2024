const mongoose = require('mongoose')

const Schema = mongoose.Schema

const booksscheme = new Schema({
   name: {
      type : String,
      required : true
   },
   discript:{
      type : String,
      required : true
   },
   detail: {
      type : String,
      required : true
   },
   rating: {
      type : Number,
      required : true
   },
   tag:{
      type : Number,
   },
   color:{
      type : String,
   },
   
}, {timestamps : true})

module.exports = mongoose.model('book' ,booksscheme) //this ill appear in test database and name is books 