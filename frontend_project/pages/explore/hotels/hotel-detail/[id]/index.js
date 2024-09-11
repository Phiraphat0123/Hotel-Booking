
import { useRouter } from "next/router"
import { useContext } from "react"
import { HotelContext } from "@/dataContexts/hotelContext"
import Link from "next/link"
export async function getStaticPaths (){
    const res =await  fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels`)
    const data =await res.json()
    const paths =data.map(hotel=>{
        return{
            params:{id:hotel.id.toString()}
        }
    })
    console.log(paths)
    return {
        paths,
        fallback:false
    }
}
export async function getStaticProps({params}){
    const id=params.id
    console.log(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/detail/${params.id}`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/detail/${id}`)
    const data = await res.json()
    // console.log(data)
    return{
        props:{hotel:data}
    }
}

export default function HotelDetail ({hotel}){
    console.log("this hotel detail",hotel)
    const router=useRouter()
    const {id} =router.query

    // context
    const {location}=useContext(HotelContext)
    return (
        <>
            <div>
                {location}
            </div>
            {hotel.id}
            {hotel.name}
            {  hotel.roomTypes.map(room=>{
                return (<Link href={{
                    pathname:`/explore/hotels/hotel-detail/${id}/review-hotel`,
                    query:{room_id:room.roomId,hotel_id:id}
                }}>
                    {room.name}
                </Link>)
            }) 
            }
        </>
    )
}