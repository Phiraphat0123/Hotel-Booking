import styles from "@/styles/Payment.module.css"
import { useState } from "react"
import PaymentDone from "@/components/PaymentDone"
import Image from "next/image"
import Router from "next/router"
import { useRouter } from "next/router"
export default function Payment (){
    const [isPay,setIsPay]=useState(false)
    const router =useRouter()
    const {id}=router.query
    console.log(id)
    const MakeTransaction=()=>{
        setIsPay(true)
    }
    return (
        <div className={styles.payment_wrapper}>
            
           { isPay&&<PaymentDone />}
           {/* payment container */}
            <div>
                {/* back */}
                <button onClick={()=>Router.back()}>
                    go back {id}
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
                            <div>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    Debit Card
                                </h4>
                            </div>
                            <div>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    UPI
                                </h4>
                            </div>
                            <div>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    PhonePay
                                </h4>
                            </div>
                            <div>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    Net Banking
                                </h4>
                            </div>
                            <div>
                                {/* payment item */}
                                <Image src="" alt="s" />
                                <h4>
                                    Credit Card
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
           </div>


           <div>
            {/* pay amount */}
            <div>
                {/* detial container */}
                <div>
                    <h5>
                        Base fare
                    </h5>
                    <p>
                        1000.00
                    </p>
                </div>
                <div>
                    <h5>
                        Total discount
                    </h5>
                    <p>
                        0.00
                    </p>
                </div>
                <div>
                    <h5>
                        Price after discount
                    </h5>
                    <p>
                        1,000.00
                    </p>
                </div>
                <div>
                    <h5>
                        Taxes & service  fees
                    </h5>
                    <p>
                        140.00
                    </p>
                </div>
            </div>
            <div>
                <h4>
                    Total Amount
                </h4>
                <p>
                    1,140.00
                </p>
            </div>
           </div>
        </div>
    )
}