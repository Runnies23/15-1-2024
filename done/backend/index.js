const express = require('express')
const BookRoutes = require('./routes/workout')
const mongoose = require('mongoose')

//what is this    
require('dotenv').config()

const app = express()


//middleware
app.use(express.json())

app.use((req,res,next) => {
   console.log(req.path,req.method)
   next()
})

app.use('/book',BookRoutes)

//connect to mongo 
mongoose.connect(process.env.MONGO_URI)
   .then(() => {
      app.listen(process.env.PORT,() => {
         console.log('connect to mongodb and listening on port', process.env.PORT)
      })
   })
   .catch((error) => {
      console.log(error)
   })