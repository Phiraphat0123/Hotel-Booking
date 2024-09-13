import { useEffect, useState } from "react"

export default function StarList ({star, size, gapSize}){
    const [starList ,setStarList]=useState([])
    useEffect(()=>{
        if(star!=undefined){
        const getStar=(num)=>{
            let list =[]
            for(let i =0;i<num;i++){
                list.push(<svg style={{width:`${size}px`,height:`${size}px`,gap:`${gapSize}px`}} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.999" d="M9.6 16.3311L15.53 20.0951L13.961 12.9951L19.195 8.22105L12.295 7.59805L9.6 0.904053L6.9 7.59705L0 8.22005L5.234 12.994L3.665 20.0941L9.6 16.3311Z" fill="#DFA12D"/>
                </svg>)
            }
            if((5-num)==0){
                return list
            }else{
                for(let i =0;i<(5-num);i++){
                    list.push(
                        <svg style={{width:`${size}px`,height:`${size}px`,gap:`${gapSize}px`}} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.448" d="M10.3632 16.3311L16.2932 20.0951L14.7242 12.9951L19.9582 8.22105L13.0582 7.59805L10.3632 0.904053L7.66319 7.59705L0.763184 8.22005L5.99718 12.994L4.42818 20.0941L10.3632 16.3311Z" fill="#B7BCF3"/>
                        </svg>
                    )
                }
            }
            return list
        }
        
            setStarList(getStar(Math.round(star)))
        }
    },[star, size, gapSize])
    return (
        <div>
            {starList.map(star=>star)}
        </div>
    )
}