import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "@/styles/ReviewHotel.module.css"
import SearchBar from "@/components/SearchBar"
import FilterSearchBar from "@/components/FilterSearchBar"
import Image from "next/image"
import { HotelContext } from "@/dataContexts/hotelContext"
import { useContext } from "react"
import newFormatDate from "@/js-functions/NewFormatDate"
import calculateDaysBetween from "@/js-functions/calculateDayBetween"
import StarList from "@/components/StarList"




 function ReviewHotel (){
    const [hotelDetail,setHotelDetail] =useState(null)
    const [dataLoaded,setDataLoaded] =useState(false)
    const [payment,setPayment]=useState(null)

    const [guestList,setGuestList]=useState([])
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const [specialReq,setSpecialReq]=useState("")

    const {
        checkOut,checkIn,
        adultAmount,childrenAmount,
        roomAmount,
    }=useContext(HotelContext)
    

    const router =useRouter()
    const {room_id,hotel_id}=router.query
    useEffect(()=>{
        if(room_id,checkIn,checkOut,roomAmount){
            
            const fetchDetail=async()=>{
                try{
                    let days =calculateDaysBetween(checkOut,checkIn)
                    // console.log(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${hotelId}?room_id=${room_id}&night_need=2`)
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${hotel_id}?room_id=${room_id}&night_need=${days}&room_amount=${roomAmount}`)
                    if(!res.ok){
                        throw new Error('Failed to fetch hotel data')
                    }
                    const hotelData = await res.json()
                    setHotelDetail(hotelData)
                    setDataLoaded(true)
                    setPayment(hotelData.payment)
                }catch(err){
                    console.log(err.message)
                }
            }   
            fetchDetail()
        }
    },[room_id,checkIn,checkOut,roomAmount])
    // console.log("this is data fetching from review-hotel",hotelDetail)

    const toPayment=()=>{
        let status =true
        if(firstName.length==0){
            alert("Please input Guest first name")
            status =false
        }else
        if(lastName.length==0){
            alert("Please input Guest last name ")
            status =false

        }else
        if(email.length==0){
            alert("Please input Guest Email ")
            status =false

        }else
        if(phoneNumber.length==0){
            alert("Please input Guest Phone number ")
            status =false

        }else
        if(status){
            router.push({
                pathname:`/payment`,
                query:{
                    hotel_id:hotel_id,
                    room_id:room_id
                }
            })
        }
        
    }
    
    // add new guest
    const addGuest=()=>{
        let NewGuest={
            firstname:firstName,
            lastName:lastName,
            email:email,
            phoneNumber:phoneNumber
        }
        let newList = [...guestList,NewGuest]
        setGuestList(newList)
    }

    


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
            <div className={styles.mobile_title_wrapper}>
                <button onClick={()=>router.back()}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_8_1680"  maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                        <path d="M4 4L4 28H28V4H4Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_8_1680)">
                        <path d="M18.9811 23.373L11.6074 15.9997L18.9811 8.625L20.3958 10.0397L14.4355 15.9997L20.3958 21.9596L18.9811 23.373Z" fill="black"/>
                        </g>
                    </svg>
                </button> 
                <h3>
                    Hotel details
                </h3>
                <div>

                </div>
            </div>
            <div className={styles.search_wrapper}>
                <SearchBar/>
                <FilterSearchBar/>
            </div>
            {/* content */}
            <div className={styles.review_hotel}>
                {/* hotel information */}
                <div className={styles.hotel_info}>
                    {/* review your booking */}
                    <div className={styles.review_booking}>
                        {/* text */}
                        <div className={styles.booking_info}>
                            <h5>
                                Review your booking
                            </h5>   
                            <div>
                                <div className={styles.hotel_name}>
                                    <h6>
                                        {dataLoaded&&hotelDetail.name}
                                    </h6>
                                    {/* star container */}
                                    {dataLoaded&&<StarList star={hotelDetail.reviews.avg} size={31} gapSize={0} />}
                                </div>

                                {/* location */}
                                <div className={styles.hotel_location}>
                                    <p>
                                        {dataLoaded&&hotelDetail.location}
                                    </p>
                                    <p>
                                        This hotel is reviewed by global firm
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* image */}
                        <div className={styles.img_wrapper}>
                            <Image src="/example_img.png" width={231} height={105} alt="hotel_img" />
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
                                    { checkIn&&newFormatDate(checkIn.substring(8,10),checkIn.substring(5,7),checkIn.substring(0,4))}
                                </h5>
                                <p>
                                    10am
                                </p>
                            </div>
                            {/* night */}
                            <div>
                                <h6>
                                    {calculateDaysBetween(checkOut,checkIn)} night
                                </h6>
                            </div>

                            {/* check out */}
                            <div>
                                <p>
                                    Check-out
                                </p>
                                <h5>
                                    { checkOut&&newFormatDate(checkOut.substring(8,10),checkOut.substring(5,7),checkOut.substring(0,4))}
                                </h5>
                                <p>
                                    10am
                                </p>
                            </div>
                            {/* people */}
                            <div>
                                <h5>
                                    {`${adultAmount} Adult`}, {childrenAmount!=0&&`${childrenAmount} Children`} - {`${roomAmount} room`}
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    {/* payment display */}
                    <div className={styles.payment_wrapper_mobile}>
                        {/* payment detail wrapper */}
                        <div className={styles.payment_container}>
                            {/* payment item */}
                            <div>
                                <h6>
                                    {roomAmount} room X {dataLoaded&&payment.night} night
                                </h6>
                                <p>
                                    {dataLoaded&&((payment.price*payment.night)*payment.roomAmount).toFixed(2)}
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    Total discount
                                </h6>
                                <p>
                                    {dataLoaded&&payment.discount.toFixed(2)}
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    Price after discount
                                </h6>
                                <p>
                                    {dataLoaded&&(payment.discountPrice.toFixed(2))}
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h6>
                                    Taxes & service fees
                                </h6>
                                <p>
                                    {dataLoaded&&(payment.tax.toFixed(2))}
                                </p>
                            </div>
                            {/* payment item */}
                            <div>
                                <h5>
                                    Total Amount
                                </h5>
                                <h5>
                                    {dataLoaded&&(payment.totalPrice.toFixed(2))}
                                </h5>
                            </div>
                        </div>
                        {/* policy */}
                        <div className={styles.policy_wrapper}>
                            <h6>
                                Cancellation Charges 
                            </h6>
                            <div>
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
                    {/* guest detail */}
                    <div className={styles.guest_wrapper}>
                        <h5>
                            Guest Details
                        </h5>
                        {/* guest list wrapper */}
                        <div className={styles.guest_list_wrapper}>
                            <div className={styles.guest_list}>
                                {/* guest item */}
                                <div className={styles.guest_item}>
                                    {/* first & last name */}
                                    <div>
                                        <input type="text" placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                                        <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                                    </div>
                                    {/* email mobile number */}
                                    <div>
                                        <input type="text" placeholder="E-mail address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                        <input type="text" placeholder="Mobile number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <button>
                                Add Guest +
                            </button>
                        </div>
                    </div>
                    {/* special Request */}
                    <div className={styles.special_wrapper}>
                        <div>
                            <h5>
                                Special Request(optional)
                            </h5>
                            <textarea value={specialReq} onChange={(e)=>setSpecialReq(e.target.value)}></textarea>
                        </div>
                        <button onClick={()=>toPayment()}>
                            Continue
                        </button>
                    </div>
                </div>
                {/* payment display */}
                <div className={styles.payment_wrapper}>
                    {/* payment detail wrapper */}
                    <div className={styles.payment_container}>
                        {/* payment item */}
                        <div>
                            <h6>
                                {roomAmount} room X {dataLoaded&&payment.night} night
                            </h6>
                            <p>
                                {dataLoaded&&((payment.price*payment.night)*payment.roomAmount).toFixed(2)}
                            </p>
                        </div>
                        {/* payment item */}
                        <div>
                            <h6>
                                Total discount
                            </h6>
                            <p>
                                {dataLoaded&&payment.discount.toFixed(2)}
                            </p>
                        </div>
                        {/* payment item */}
                        <div>
                            <h6>
                                Price after discount
                            </h6>
                            <p>
                                {dataLoaded&&(payment.discountPrice.toFixed(2))}
                            </p>
                        </div>
                        {/* payment item */}
                        <div>
                            <h6>
                                Taxes & service fees
                            </h6>
                            <p>
                                {dataLoaded&&(payment.tax.toFixed(2))}
                            </p>
                        </div>
                        {/* payment item */}
                        <div>
                            <h5>
                                Total Amount
                            </h5>
                            <h5>
                                {dataLoaded&&(payment.totalPrice.toFixed(2))}
                            </h5>
                        </div>
                    </div>
                    {/* policy */}
                    <div className={styles.policy_wrapper}>
                        <h6>
                            Cancellation Charges 
                        </h6>
                        <div>
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