const Book = require('../models/workoutmodels')
const mongoose = require('mongoose')

//get all book 
const getallbook = async(req,res) => { 
   const book = await Book.find({}).sort({createAt: -1})

   res.status(200).json(book)
}

//get singke book 
const getbook = async(req,res) => {
   const { id } = req.params

   if(!mongoose.Types.ObjectId.isValid(id)){ // check obj id before 
      return res.status(400).json({error : 'No book'})
   }

   const book = await Book.findById(id)

   if(!book){
      return res.status(400).json({error : 'No book'})
   }

   res.status(200).json(book) //return workout 
}

//create new book 
const createbook = async(req,res) => {
   const {name,discript,detail,rating,color} = req.body

   // add doc to 
   try{
      const book = await Book.create({name,discript,detail,rating,color})
      res.status(200).json(book)
   }catch(error){
      res.status(400).json({error : error.message})
   }
}

//deleted book 
const deletedbook = async(req,res) => {
   const { id } = req.params

   if(!mongoose.Types.ObjectId.isValid(id)){ // check obj id before 
      return res.status(400).json({error : 'No book'})
   }

   const book = await Book.findOneAndDelete({_id : id})

   if(!book){
      return res.status(400).json({error : 'No book'})
   }

   res.status(200).json(book) //return workout 
}

//update book
const updatebook = async (req,res) => { 
   const { id } = req.params

   if(!mongoose.Types.ObjectId.isValid(id)){ // check obj id before 
      return res.status(404).json({error : 'No book'})
   }

   const book = await Book.findOneAndUpdate({_id: id} , {
      ...req.body
   })

   if(!book){
      return res.status(400).json({error : 'No book'})
   }

   res.status(200).json(book)
}


module.exports ={
   createbook,
   getallbook,
   getbook,
   deletedbook,
   updatebook,
}