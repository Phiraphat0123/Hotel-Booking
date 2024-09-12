import styles from "@/styles/Hotels.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
export default function HotelCard ({props}){
    const {id,name,location,image}=props
    const router =useRouter()
    const goDetail =()=>{
        router.push(`/explore/hotels/hotel-detail/${id}`)
    }
    return (
        // {/* hotel item */}
        <div className={styles.hotel_card}>
            <Image src="/example_img.png" width={449} height={280} alt="hotel_img" />
            <div>
                <div>
                    <h5>
                        {/* Nobu Hotel Chicago */}
                        {name}
                    </h5>
                    <p>
                        Price starts from 1,000
                    </p>
                </div>
                <button onClick={()=>goDetail()}>
                    View Details
                </button>
            </div>
        </div>
    )
}