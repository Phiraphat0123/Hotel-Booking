import styles from "@/styles/Payment.module.css"
import { useEffect, useState } from "react"
import PaymentDone from "@/components/PaymentDone"
import Image from "next/image"
import Router from "next/router"
import { useRouter } from "next/router"
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
           {/* payment container */}
            <div>
                {/* back */}
                <button onClick={()=>Router.back()}>
                    go back 
                </button>
            </div>
           <div className={styles.payment_container}>
                
                <div>
                    <h3>
                        Payment Details
                    </h3>
                    <div>
                        {/* wrapper list payment */}
                        <div>
                            {/* list payment */}
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    Debit Card
                                </h4>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    UPI
                                </h4>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    PhonePay
                                </h4>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    Net Banking
                                </h4>
                            </button>
                            <button onClick={()=>setIsPay(true)}>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    Credit Card
                                </h4>
                            </button>
                        </div>
                    </div>
                </div>
           </div>


           {dataLoaded&&<div>
                {/* pay amount */}
                <div>
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
                    <p>
                        {payment.totalPrice.toFixed(2)}
                    </p>
                </div>
           </div>}
        </div>
    )
}