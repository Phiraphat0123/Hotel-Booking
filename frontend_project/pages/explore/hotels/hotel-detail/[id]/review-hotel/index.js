import { useRouter } from "next/router"
import { useEffect, useState } from "react"



 function ReviewHotel (){
    const [hotelDetail,setHotelDetail] =useState(null)
    const [dataLoaded,setDataLoaded] =useState(false)
    const router =useRouter()
    const {room_id,hotel_id}=router.query
    useEffect(()=>{
        if(room_id){
            const fetchDetail=async()=>{
                try{
                    // console.log(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${hotelId}?room_id=${room_id}&night_need=2`)
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${hotel_id}?room_id=${room_id}&night_need=2`)
                    if(!res.ok){
                        throw new Error('Failed to fetch hotel data')
                    }
                    const hotelData = await res.json()
                    setHotelDetail(hotelData)
                    setDataLoaded(true)
                }catch(err){
                    console.log(err.message)
                }
            }   
            fetchDetail()
        }
    },[room_id])
    console.log("this is data fetching from review-hotel",hotelDetail)
    return (
        <>
            <div>
            this is review hotel {room_id} {hotel_id}  {dataLoaded&&hotelDetail.name} {dataLoaded&&hotelDetail.location}
            
            </div>
            <button onClick={()=>router.push({
                pathname:`/payment`,
                query:{
                    hotel_id:hotel_id,
                    room_id:room_id
                }
            })}>
                continue
            </button>
        </>
    )
}

// export async function getStaticPaths(params) {
//     const res =await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels`)
//     const data =await res.json()
//     const paths = data.map(hotel=>{
//         return {
//             params:{id:hotel.id.toString()}
//         }
//     })
//     return {
//         paths,
//         fallback:false
//     }
// }
// export async function getStaticProps({params} ) {
//     // const {room_id} = router.query
//     const id=params.id
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${id}?room_id=${roomId}`)
//     const data = await res.json()
//     return{
//         props:{hotel:data}
//     }
    
// }
export default ReviewHotel