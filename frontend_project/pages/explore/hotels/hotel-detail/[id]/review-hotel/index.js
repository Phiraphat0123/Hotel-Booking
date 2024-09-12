import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "@/styles/ReviewHotel.module.css"
import SearchBar from "@/components/SearchBar"
import FilterSearchBar from "@/components/FilterSearchBar"
import Image from "next/image"


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
        <div className={styles.review_hotel_wrapper}>
            {/* <div>
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
            </button> */}

            <SearchBar/>
            <FilterSearchBar/>
            {/* content */}
            <div className={styles.review_hotel}>
                {/* hotel information */}
                <div>
                    {/* review your booking */}
                    <div>
                        {/* text */}
                        <div>
                            <h5>
                                Review your booking
                            </h5>   
                            <div>
                                <h6>
                                    Hotel name
                                </h6>
                                {/* star container */}
                                <div>
                                    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.999" d="M15.5723 24.92L25.1513 31L22.6173 19.531L31.0723 11.819L19.9253 10.812L15.5723 0L11.2183 10.812L0.0722656 11.819L8.52727 19.531L5.99327 31L15.5723 24.92Z" fill="#DFA12D"/>
                                    </svg>
                                </div>
                                {/* location */}
                                <p>
                                    Tambudki, Arpora, goa, Goa, India
                                </p>
                                <p>
                                    This hotel is reviewed by global firm
                                </p>
                            </div>
                        </div>
                        {/* image */}
                        <div>
                            <Image />
                        </div>
                    </div>
                    {/* review my info */}
                    <div className={styles.my_info_wrapper}>
                        <div className={styles.my_info_container}>
                            {/* check in */}
                            <div>
                                <p>
                                    Check-in
                                </p>
                                <h5>
                                    Sunday 21, Dec
                                </h5>
                                <p>
                                    10am
                                </p>
                            </div>
                            {/* night */}
                            <div>
                                1 night
                            </div>

                            {/* check out */}
                            <div>
                                <p>
                                    Check-out
                                </p>
                                <h5>
                                    Monday 22,Dec
                                </h5>
                                <p>
                                    10am
                                </p>
                            </div>
                            {/* people */}
                            <div>
                                2 Adult - 1 room
                            </div>
                        </div>
                    </div>
                    
                    {/* guest detail */}
                    <div>
                        <h5>
                            Guest Details
                        </h5>
                        {/* guest list wrapper */}
                        <div>
                            <div>
                                {/* guest item */}
                                <div>
                                    {/* first & last name */}
                                    <div>
                                        <input />
                                        <input />
                                    </div>
                                    {/* email mobile number */}
                                    <div>
                                        <input />
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <button>
                                Add Guest +
                            </button>
                        </div>
                    </div>
                    {/* special Request */}
                    <div>
                        <div>
                            <h5>
                                Special Request(optional)
                            </h5>
                            <textarea></textarea>
                        </div>
                        <button>
                            Continue
                        </button>
                    </div>
                </div>
                {/* payment display */}
                <div>
                    {/* payment detail wrapper */}
                    <div>
                        <div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    1 room X 1 night
                                </h6>
                                <p>
                                    1,000.00
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    Total discount
                                </h6>
                                <p>
                                    0.00
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    Price after discount
                                </h6>
                                <p>
                                    1,000.00
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    Taxes & service fees
                                </h6>
                                <p>
                                    140.00
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    Total Amount
                                </h6>
                                <p>
                                    1,140.00
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* policy */}
                    <div>
                        <h6>
                            Cancellation Charges 
                        </h6>
                        <div>
                            <h6>
                                Non Refundable
                            </h6>
                            <p>
                                Penalty may be charged by the airline & by MMT based on how close to departure date you cancel. View fare rules to know more.
                            </p>
                        </div>
                        <button>
                            VIEW POLICY
                        </button>
                    </div>
                </div>
            </div>
        </div>
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