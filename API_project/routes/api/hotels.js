
const express =require('express')
const hotels= require("../../fake-data/Hotels")
const router = express.Router()
const uuid = require('uuid')

// get hotels data
router.get('/',(req,res)=>{
    res.status(200).json(hotels)
})

router.get('/:id',(req,res)=>{
    let data = hotels.filter(element=>{
        return element.id===parseInt(req.params.id)
    })
    console.log(data)
    res.status(200).json(data)
})

// create hotel data
router.post('/',(req, res)=>{
    const newBooking ={
        id: uuid.v4(),
        name: req.body.name
    }
    if(!req.body.name){
        res.status(400).json({msg:`no data name!`})
    }
    else{
        hotels.push(newBooking)
        console.log(hotels)
        res.json(hotels)
    }
})

module.exports = router