
import styles from "@/styles/HotelDetail.module.css"
export default function isShowPeopleInput ({props}){
    const {
        adultAmount,setAdultAmount,
        childrenAmount,setChildrenAmount,
        roomAmount,setRoomAmount
    } =props
    return(
        <div className={styles.people_input_container}>
            <div>
                <p>
                    Adult
                </p>
                <p>
                    Children
                </p>
                <p>
                    Room
                </p>
            </div>
            
            <div>
                <input type="number" onChange={(e)=>setAdultAmount(e.target.value)} value={adultAmount} min={0}/>
                <input type="number" onChange={(e)=>setChildrenAmount(e.target.value)} value={childrenAmount} min={0}/>
                <input type="number" onChange={(e)=>setRoomAmount(e.target.value)} value={roomAmount} min={0} />
            </div>
        </div>
    )
}