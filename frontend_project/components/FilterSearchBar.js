import styles from "@/styles/HotelDetail.module.css"
import { useState } from "react"
import { useContext } from "react"
import { HotelContext } from "@/dataContexts/hotelContext"
import ShowInputPeople from "../components/ShowInputPeople"
import ShowInputDate from "./ShowInputDate"
import newFormatDate from "../js-functions/NewFormatDate"
export default function FilterSearchBar (){
    // status
    const [isShowPeopleInput,setIsShowPeopleInput]=useState(false)
    const [isShowCheckInInput,setIsShowCheckInInput] =useState(false)
    const [isShowCheckOutInput,setIsShowCheckOutInput] =useState(false)
    

    // variable
    const {
        location,setLocation,
        checkIn,setCheckIn,
        checkOut,setCheckOut,
        adultAmount,setAdultAmount,
        childrenAmount,setChildrenAmount,
        roomAmount,setRoomAmount,
        today
    } =useContext(HotelContext)


    const search=()=>{
        // search function....

        
        setIsShowPeopleInput(false)
        setIsShowCheckInInput(false)
        setIsShowCheckOutInput(false)
    }
    return (
        <div className={styles.filter_wrapper}>
            <input type="text" className={styles.input} value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Where are you going?" />
            <div>
                {/* check in */}
                <div className={styles.date_input_wrapper}>
                    {/* <input type="text" className={styles.input} placeholder="20 Dec,2020"/> */}
                    <button className={styles.input} onClick={()=>setIsShowCheckInInput(!isShowCheckInInput)}>
                        
                        { checkIn&&newFormatDate(checkIn.substring(8,10),checkIn.substring(5,7),checkIn.substring(0,4))}
                    </button>
                    {isShowCheckInInput&&<ShowInputDate dateSelected={checkIn} onSetDate={setCheckIn} labelText="Check-in" maxLength={checkOut} minLength={today}  />}
                </div>

                {/* check out */}
                <div className={styles.date_input_wrapper}>
                    {/* <input type="text" className={styles.input} placeholder="21 Dec,2020"/> */}
                    <button className={styles.input} onClick={()=>setIsShowCheckOutInput(!isShowCheckOutInput)}>
                        
                        { checkOut&&newFormatDate(checkOut.substring(8,10),checkOut.substring(5,7),checkOut.substring(0,4))}
                    </button>
                    {isShowCheckOutInput&&<ShowInputDate dateSelected={checkOut} onSetDate={setCheckOut} labelText="Check-out" minLength={checkIn} />}
                </div>
                
            </div>

            {/* people input wrapper */}
            <div className={styles.people_input_wrapper}>
                {/* <input type="text" placeholder="2 adult ,0 children - 1 room"/> */}
                <button className={styles.input} onClick={()=>setIsShowPeopleInput(!isShowPeopleInput)}>
                    {adultAmount} adult ,{childrenAmount} children - {roomAmount} room
                </button>
                {/* show for in put */}
                {isShowPeopleInput&&<ShowInputPeople props={{
                    adultAmount,setAdultAmount,
                    childrenAmount,setChildrenAmount,
                    roomAmount,setRoomAmount}}
                    
                />}
            </div>
            
            
            <button onClick={()=>search()}>
                Search
            </button>

        </div>
    )
}