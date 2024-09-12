const  hotels =[
    {
        id:1,
        name:"Villa D’Citta",
        location:"Thailand",
        roomTypes:[
            {
                roomId:1,
                name:"Normal Room",
                price:800,
                night:1,
                support:2,
                status:false, //สถานะของห้อง false = available, true = booked
                discount:0
            },
            {
                roomId:2,
                name:"Deluxe Room",
                price:1500,
                night:1,
                support:4,
                status:false, //สถานะของห้อง false = available, true = booked
                discount:0
            }
        ],
        reviews:{
            amount:6879,
            avg:8.4,
            houseKeeping:4,
            food:4.5,
            service:4,
            staff:4
        },
        service:{
            car:true,
            bath:true,
            drink:true,
            wifi:true,
            gym:true
        },
        policy:"this is policy ",
        image:"main.png",
        images:[
            "main.png"
        ]
    },
    {
        id:2,
        name:"The Langham, Chicago",
        location:"Chicago",
        roomTypes:[
            {
                roomId:1,
                name:"normal room",
                price:500,
                night:1,
                support:1,
                status:false,
                discount:0
            }
        ],
        reviews:{
            amount:6879,
            avg:8.4,
            houseKeeping:4,
            food:4.5,
            service:4,
            staff:4
        },
        service:{
            car:true,
            bath:true,
            drink:true,
            wifi:true,
            gym:true
        },
        policy:"this is policy ",
        image:"main.png",
        images:[
            "main.png"
        ]
        
    },
    {
        id:3,
        name:"Nobu Hotel Chicago",
        location:"Chicago",
        roomTypes:[
            {
                roomId:1,
                name:"Normal Room",
                price:1500,
                night:1,
                support:3,
                status:false,
                discount:0
            }
        ],
        reviews:{
            amount:6879,
            avg:8.4,
            houseKeeping:4,
            food:4.5,
            service:4,
            staff:4
        },
        service:{
            car:true,
            bath:true,
            drink:true,
            wifi:true,
            gym:true
        },
        policy:"this is policy ",
        image:"main.png",
        images:[
            "main.png"
        ]
    },
    {
        id:4,
        name:"Loews Chicago Hotel",
        location:"Thailand",
        roomTypes:[
            {
                roomId:"Deluxe Room",
                price:1500,
                night:1,
                support:1,
                status:false,
                discount:0
            }
        ],
        reviews:{
            amount:6879,
            avg:8.4,
            houseKeeping:4,
            food:4.5,
            service:4,
            staff:4
        },
        service:{
            car:true,
            bath:true,
            drink:true,
            wifi:true,
            gym:true
        },
        policy:"this is policy ",
        image:"main.png",
        images:[
            "main.png"
        ]
    }
    ,
    {
        id:5,
        name:"The Langham, Chicago",
        location:"Chicago",
        roomTypes:[
            {
                roomId:1,
                name:"normal room",
                price:500,
                night:1,
                support:1,
                status:false,
                discount:0
            }
        ],
        reviews:{
            amount:6879,
            avg:8.4,
            houseKeeping:4,
            food:4.5,
            service:4,
            staff:4
        },
        service:{
            car:true,
            bath:true,
            drink:true,
            wifi:true,
            gym:true
        },
        policy:"this is policy ",
        image:"main.png",
        images:[
            "main.png"
        ]
        
    }
]

module.exports  = hotels