import styles from "@/styles/Payment.module.css"
import { useContext, useEffect, useState } from "react"
import PaymentDone from "@/components/PaymentDone"
import Image from "next/image"
import Router from "next/router"
import { useRouter } from "next/router"
import { HotelContext } from "@/dataContexts/hotelContext"
import calculateDaysBetween from "@/js-functions/calculateDayBetween"
export default function Payment (){
    const [isPay,setIsPay]=useState(false)
    const router =useRouter()
    const {hotel_id,room_id}=router.query
    // console.log(id)
    const MakeTransaction=()=>{
        setIsPay(true)
    }
    const [hotelDetail,setHotelDetail]= useState(null)
    const [dataLoaded,setDataLoaded] =useState(false)
    const [payment,setPayment]=useState(null)

    const {checkIn,checkOut,roomAmount}=useContext(HotelContext)
    useEffect(()=>{
        if(room_id){
            const fetchDetail=async()=>{
                try{
                    // console.log(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${hotelId}?room_id=${room_id}&night_need=2`)
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/api/hotels/review/${hotel_id}?room_id=${room_id}&night_need=${calculateDaysBetween(checkOut,checkIn)}&room_amount=${roomAmount}`)
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
    },[room_id])

    return (
        <div className={styles.payment_wrapper}>
            
           { isPay&&<PaymentDone />}
            
           {!isPay&&
            <div className={styles.payment_container}>
                <div className={styles.mobile_title_wrapper}>
                    {/* back */}
                    <button onClick={()=>Router.back()}>
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
                        Payment Details
                    </h3>
                    <div>

                    </div>
                </div>
                {/* content */}
                <div className={styles.payment}>
                    {/* select payment */}
                    <div className={styles.payment_selection_wrapper}>
                        <h3>
                            Payment Details
                        </h3>
                        <div className={styles.payment_list_wrapper}>
                            {/* list payment */}
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <div>
                                    <Image src="/debit_card.png" width={59} height={59} alt="s" />
                                    <h4>
                                        Debit Card
                                    </h4>
                                </div>
                                <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.45996 3.35583L12.5703 12.7162L3.45996 21.6449" stroke="#2D3DDF" strokeWidth="5" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <div>
                                    <Image src="/upi.png" width={59} height={59} alt="s" />
                                    <h4>
                                        UPI
                                    </h4>
                                </div>
                                <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.45996 3.35583L12.5703 12.7162L3.45996 21.6449" stroke="#2D3DDF" strokeWidth="5" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <div>
                                    <Image src="/phone_pay.png" width={59} height={59} alt="s" />
                                    <h4>
                                        PhonePay
                                    </h4>
                                </div>
                                <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.45996 3.35583L12.5703 12.7162L3.45996 21.6449" stroke="#2D3DDF" strokeWidth="5" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <div>
                                    <Image src="/net_banking.png" width={59} height={59} alt="s" />
                                    <h4>
                                        Net Banking
                                    </h4>
                                </div>
                                <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.45996 3.35583L12.5703 12.7162L3.45996 21.6449" stroke="#2D3DDF" strokeWidth="5" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <div>
                                    <Image src="/credit_card.png" width={59} height={59} alt="s" />
                                    <h4>
                                        Credit Card
                                    </h4>
                                </div>
                                <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.45996 3.35583L12.5703 12.7162L3.45996 21.6449" stroke="#2D3DDF" strokeWidth="5" stroke-linecap="round"/>
                                </svg>

                            </button>
                        </div>
                    </div>
                    {dataLoaded&&
                    <div className={styles.payment_detail_wrapper}>
                        {/* pay amount */}
                        <div className={styles.payment_detail_list}>
                            {/* detial container */}
                            <div>
                                <h5>
                                    Base fare
                                </h5>
                                <p>
                                    {/* 1000.00 */}
                                    {((payment.price*payment.night)*payment.roomAmount).toFixed(2)}

                                </p>
                            </div>
                            <div>
                                <h5>
                                    Total discount
                                </h5>
                                <p>
                                    {payment.discount.toFixed(2)}
                                </p>
                            </div>
                            <div>
                                <h5>
                                    Price after discount
                                </h5>
                                <p>
                                    {payment.discountPrice.toFixed(2)}
                                </p>
                            </div>
                            <div>
                                <h5>
                                    Taxes & service  fees
                                </h5>
                                <p>
                                    {payment.tax.toFixed(2)}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4>
                                Total Amount
                            </h4>
                            <h4>
                                {payment.totalPrice.toFixed(2)}
                            </h4>
                        </div>
                    </div>}
                </div>
                
           </div>}


           
        </div>
    )
}