import { createContext, useState } from "react";
export const HotelContext =createContext()

export function HotelProvider  ({children}){
    // const [searchValue,setSearchValue] =useState({location:"",adult:0,children:0,checkIn:"",checkOut:"",roomAmount:0})
    const date = new Date();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month=(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const year =date.getFullYear()
    const toDay = `${year}-${month}-${day}`; 

    date.setDate(date.getDate() + 1); // Add 1 day to today's date (for tomorrow)

    const toMorrow = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;

    // const tomorrowDate =new Date(date.Date() +1)
    // const nextDay = tomorrowDate.getDate() < 10 ? '0' + tomorrowDate.getDate() : tomorrowDate.getDate()
    // const nextMonth=(tomorrowDate.getMonth() + 1) < 10 ? '0' + (tomorrowDate.getMonth() + 1) : tomorrowDate.getMonth() + 1
    // const nextYear =tomorrowDate.getFullYear()
    // const tomorrow = `${nextYear}-${nextMonth}-${nextDay}`; 

    const [location,setLocation] =useState("")
    const [checkIn,setCheckIn]=useState(toDay)
    const [checkOut,setCheckOut]=useState(toMorrow)
    const [adultAmount,setAdultAmount]=useState(0)
    const [childrenAmount,setChildrenAmount]=useState(0)
    const [roomAmount,setRoomAmount]=useState(1)
    const [today,setToday]=useState(toDay)

    return (
        <HotelContext.Provider value={{
            location,setLocation,
            checkIn,setCheckIn,
            checkOut,setCheckOut,
            adultAmount,setAdultAmount,
            childrenAmount,setChildrenAmount,
            roomAmount,setRoomAmount,
            today,setToday
        }}>
        {/* <HotelContext.Provider value={{searchValue,setSearchValue}}> */}
            {children}
        </HotelContext.Provider>
    )
}