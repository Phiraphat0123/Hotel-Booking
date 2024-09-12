import styles from "@/styles/HotelDetail.module.css"
export default function ShowInputDate ({labelText,dateSelected,onSetDate}){



    return(
        <div className={styles.date_input_container} >
            <p>
                {labelText}
            </p>
            <input  type="date" value={dateSelected} onChange={(e)=>onSetDate(e.target.value)} />
        </div>
    )
}