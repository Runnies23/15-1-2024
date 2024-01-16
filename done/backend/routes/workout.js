const express = require('express')
const router = express.Router()
const {createbook,getallbook,getbook,deletedbook,updatebook,} = require('../controller/workoutcontroller.js')

router.get('/' , getallbook)

//get single 
router.get('/:id' ,getbook)

router.post('/' ,createbook)

//deleteda workout
router.delete('/:id' ,deletedbook)

//update
router.patch('/:id' ,updatebook)


module.exports = router