import styles from "@/styles/Hotels.module.css"
import { useRouter } from "next/router"
export default function SearchBar (){
    const router =useRouter()
    return (
        // {/* search bar */}
        <div className={styles.search_bar_wrapper}>
            <button onClick={()=>router.back()}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_8_1617"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <path d="M0 0L0 24H24V0H0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_8_1617)">
                    <path d="M14.9811 19.373L7.60742 11.9997L14.9811 4.625L16.3958 6.03971L10.4355 11.9997L16.3958 17.9596L14.9811 19.373Z" fill="black"/>
                    </g>
                </svg>
            </button>
            <input type="text" placeholder="Search city , Country, Place for Travel advisory" />
        </div>
    )
}