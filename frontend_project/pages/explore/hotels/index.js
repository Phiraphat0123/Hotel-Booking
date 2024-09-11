import { useState,useContext,useEffect } from "react"
import { useRouter } from "next/router"
import { HotelContext } from "@/dataContexts/hotelContext"

// export async function getStaticProps (){
   
    
//     const res =await  fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/search?adult=1&location=thailand`)
//     const data =await res.json()
//     return{
//         props:{hotels:data}
//     }
// }

export default function Hotels (){
    const {
        location,
        checkIn,
        checkOut,
        adultAmount,
        childrenAmount,
        roomAmount
    } = useContext(HotelContext)
    const [hotelList,setHotelList] =useState()
    const [dataLoaded,setDataLoaded]=useState(false)

    useEffect(()=>{
        // if(){
            const fetchDetail=async()=>{
                try{
                    // console.log(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${hotelId}?room_id=${room_id}&night_need=2`)
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/search?adult=${adultAmount}}&location=${location}`)
                    if(!res.ok){
                        throw new Error('Failed to fetch hotel data')
                    }
                    const hotelData = await res.json()
                    setHotelList(hotelData)
                    setDataLoaded(true)
                }catch(err){
                    console.log(err.message)
                }
            }   
            fetchDetail()
        // }
    },[])

    
    const router=useRouter()
    return (
        <>
            {dataLoaded&&hotelList.map(hotel=>{
                return(
                    <button key={hotel.id} onClick={()=>router.push(`/explore/hotels/hotel-detail/${hotel.id}`)}>
                        {hotel.name} {hotel.location}
                        
                    </button>
                )
            })}
        </>
    )
}