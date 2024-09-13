import Image from 'next/image'
import styles from '@/styles/Payment.module.css'
import Link from 'next/link'
export default function PaymentDone (){
    return (
        <div className={styles.payment_done_container}>
            <div className={styles.content_wrapper}>
                <div className={styles.content_container}>
                    <Image src="/spaceman.png" width={809} height={480}  alt='spaceman-icon'/>
                    <div>
                        <div>
                            <h3>
                                Booking Successfully completed
                            </h3>
                            <p>
                                Your trip schedule is ready,please check under profile.
                            </p>
                        </div>
                        <Link href="/">
                            
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}