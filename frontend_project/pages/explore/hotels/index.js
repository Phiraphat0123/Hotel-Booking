import { useState,useContext,useEffect } from "react"
import { useRouter } from "next/router"
import { HotelContext } from "@/dataContexts/hotelContext"
import styles from '@/styles/Hotels.module.css'
import Image from "next/image"
import SearchBar from "@/components/SearchBar"
import HotelCard from "@/components/HotelCard"

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
        <div className={styles.hotels_wrapper}>
            {/* {dataLoaded&&hotelList.map(hotel=>{
                return(
                    <button key={hotel.id} onClick={()=>router.push(`/explore/hotels/hotel-detail/${hotel.id}`)}>
                        {hotel.name} {hotel.location}
                        
                    </button>
                )
            })} */}
            <div className={styles.hotels_container}>
                <SearchBar/>
                {/* fiter */}
                <div className={styles.filter_container}>
                    <h5>
                        Best places to enjoy your stay
                    </h5>
                    <div>
                        <button>
                            Sort By
                        </button>
                        <button>
                            Filter
                        </button>
                    </div>
                </div>
                {/* hotel list wrapper*/}
                <div className={styles.hotel_list_wrapper}>
                    <div className={styles.hotel_list}>
                        {dataLoaded&&hotelList.map(hotel=>{
                        return(
                            <HotelCard props={{...hotel}} key={hotel.id} />
                            // <button key={hotel.id} onClick={()=>router.push(`/explore/hotels/hotel-detail/${hotel.id}`)}>
                            //     {hotel.name} {hotel.location}
                                
                            // </button>
                        )
                        })}

                    </div>
                </div>
            </div>
            {/* recommend */}
            <div className={styles.recommend_wrapper}>
                <div className={styles.recommend_container}>
                    <h4>
                        recommend
                    </h4>
                    <div className={styles.recommend_list_wrapper}>
                        <div className={styles.recommend_list}>
                            {/* item */}
                            <div className={styles.recommend_item}>
                                <Image src="/example_img.png" width={256} height={123} alt="recommend_img" />
                                <p>
                                    Trip to Thailand & Get 30% off on flight booking
                                </p>
                            </div>
                            {/* item */}
                            <div className={styles.recommend_item}>
                                <Image src="/example_img.png" width={256} height={123} alt="recommend_img" />
                                <p>
                                    Trip to Thailand & Get 30% off on flight booking
                                </p>
                            </div>
                            {/* item */}
                            <div className={styles.recommend_item}>
                                <Image src="/example_img.png" width={256} height={123} alt="recommend_img" />
                                <p>
                                    Trip to Thailand & Get 30% off on flight booking
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}