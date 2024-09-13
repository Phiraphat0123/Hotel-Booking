export default function calculateDaysBetween(date1, date2) {
    // Create Date objects from the input strings
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
  
    // Calculate the time difference in milliseconds
    const timeDifference = firstDate.getTime() - secondDate.getTime();
  
    // Convert the time difference from milliseconds to days
    const dayDifference = timeDifference / (1000 * 3600 * 24);
  
    // Return the absolute value to get the positive difference
    return Math.abs(dayDifference);
  }