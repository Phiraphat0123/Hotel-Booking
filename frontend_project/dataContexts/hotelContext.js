import { createContext, useState } from "react";
export const HotelContext =createContext()

export function HotelProvider  ({children}){
    // const [searchValue,setSearchValue] =useState({location:"",adult:0,children:0,checkIn:"",checkOut:"",roomAmount:0})
    const date = new Date();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month=(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const year =date.getFullYear()
    const toDay = `${year}-${month}-${day}`; 

    const [location,setLocation] =useState("")
    const [checkIn,setCheckIn]=useState(toDay)
    const [checkOut,setCheckOut]=useState("")
    const [adultAmount,setAdultAmount]=useState(0)
    const [childrenAmount,setChildrenAmount]=useState(0)
    const [roomAmount,setRoomAmount]=useState(0)

    return (
        <HotelContext.Provider value={{
            location,setLocation,
            checkIn,setCheckIn,
            checkOut,setCheckOut,
            adultAmount,setAdultAmount,
            childrenAmount,setChildrenAmount,
            roomAmount,setRoomAmount
        }}>
        {/* <HotelContext.Provider value={{searchValue,setSearchValue}}> */}
            {children}
        </HotelContext.Provider>
    )
}