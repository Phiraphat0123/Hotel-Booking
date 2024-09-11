
const express =require('express')
const hotels= require("../../fake-data/Hotels")
const router = express.Router()
const uuid = require('uuid')

// get hotels data
router.get("/",(req,res)=>{
    
    let newFormatHotels=[...hotels]
    // new format
    newFormatHotels = newFormatHotels.map(hotel=>{
        let hotelInfo={

            id:hotel.id,
            name:hotel.name,
            location:hotel.location,
            image:hotel.image
        }
        return hotelInfo
    })

    res.status(200).json(newFormatHotels)
})

router.get("/detail/:id",(req,res)=>{
    const id =req.params.id
    let [hotelFilter] = hotels.filter(hotel=>{
        return hotel.id===parseInt(id)
    })
    // console.log(hotelFilter)
    if(hotelFilter!=undefined)res.status(200).json(hotelFilter);
    else res.status(404).json({msg:`not found hotel id : ${id}`})
    
})

//get hotel detail
router.get("/search",(req,res)=>{
    const {location, checkIn, checkOut, adult, children ,roomAmount}=req.query
    
    if(location==undefined&&adult==undefined&&children==undefined){
        return res.status(400).json({msg:"missing keyword for searching"})
    }
    
        // checkk location
        let hotelFilter =[...hotels]

        if(location!=undefined) {
            hotelFilter=hotelFilter.filter(hotel=>hotel.location.toLowerCase().includes(location))
        }
        // check support people
        if(adult != undefined ||children != undefined){
            let adultNumber= adult == undefined?0:parseInt(adult)
            let childrenNumber=children == undefined?0:parseInt(children)
            let people= adultNumber+childrenNumber
            console.log(`people ${adultNumber} ${childrenNumber} : ${people}`)
            hotelFilter = hotelFilter.filter(hotel=>{
                // return hotel.roomTypes.filter(room=>room.support>=people)
                console.log(`hotel name: ${hotel.name}`)
                for(let type of hotel.roomTypes){
                    // console.log(`hotel room type name: ${type.name}\n`)
                    if(type.support>=people){
                        return hotel
                    }
                }
            })
        }
        // check night with checkOut and checkIn

        // check room room amount


        // new format
        hotelFilter= hotelFilter.map(hotel=>{
            let hotelInfo={
                id:hotel.id,
                name:hotel.name,
                location:hotel.location,
                image:hotel.image
            }
            return hotelInfo
        })

    if(hotelFilter.length>0){
        res.status(200).json(hotelFilter)
    }else{
        res.status(404).json({msg:"hotel not found"})
    }


    
})

router.get("/review/:id",(req,res)=>{
    // params
    let id =req.params.id
    let roomId=req.query.room_id==undefined?1:parseInt(req.query.room_id)
    let nightNeed =req.query.night_need==undefined?1:parseInt(req.query.night_need)
    let roomAmount = req.query.room_amount==undefined?1:parseInt(req.query.room_amount)
    console.log("roomId",roomId)
    console.log("nightNeed",nightNeed)
    console.log("roomAmount",roomAmount)

    // filter by id
    let [hotelFilter] = hotels.filter(hotel=>{
        return hotel.id===parseInt(id)
    })
    // filter room
    let hotelRoom =hotelFilter.roomTypes.filter(room=>{
        if(room.roomId==parseInt(roomId)){
            return room
        }
    })
    // console.log(hotelFilter[0].roomTypes[0])

    const calculatePayment=(room,nightNeed=1,roomAmount=1)=>{
        // console.log('discount :',room)
        let [roomDetail]=room
        let pricePerNight = (roomDetail.night*roomDetail.price)*roomAmount
        let totalPrice = (pricePerNight)*nightNeed
        let discountPrice = totalPrice-roomDetail.discount
        let tax =parseFloat((discountPrice*(7/100)).toFixed(2))
        //format
        let payment ={
            roomAmount:roomAmount,
            night: nightNeed,
            price: roomDetail.price,
            discount:roomDetail.discount,
            discountPrice: discountPrice,
            tax:tax,
            totalPrice:discountPrice+tax
        }
        return payment
    }
    // console.log(roomId)
    // validate room found?
    if(hotelRoom.length==0){
        return res.status(404).json({msg:`Hotel ${id}: room type id ${roomId} not found`})
    }
    // new format
    hotelFilter ={
        id:hotelFilter.id,
        name:hotelFilter.name,
        location:hotelFilter.location,
        roomTypes:hotelRoom,
        reviews:hotelFilter.reviews,
        service:hotelFilter.service,
        policy:hotelFilter.policy,
        image:hotelFilter.image
    }

    // add payment information
    hotelFilter= {...hotelFilter,
        payment:calculatePayment(hotelRoom,nightNeed, roomAmount)
    }
    // console.log(hotelFilter)

    if(hotelFilter.length!=0&&roomId!=undefined&&id!=undefined)res.status(200).json(hotelFilter);
    else if(roomId==undefined) res.status(400).json({msg:"Room type missing"});
    else res.status(404).json({msg:`not found hotel id : ${id}`})
    
})


module.exports = router