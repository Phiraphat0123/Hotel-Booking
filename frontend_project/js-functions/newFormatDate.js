export default function formatDate(day, month, year) {
    if(day==undefined||month==undefined||year==undefined){
        return ""
    }
    // Create a new date object from the input values
    const date = new Date(year, month - 1, day); // Month is 0-indexed in JS
  
    // Define an array to map month numbers to short month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Format the date into the desired format
    const formattedDate = `${day} ${monthNames[date.getMonth()]}, ${year}`;
    
    return formattedDate;
  }
  
