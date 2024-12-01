function updateTime() {
    const now = new Date();
  
    // Extracting hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Format time as HH:MM:SS (24-hour format)
    const time24Hour = `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(seconds)}`;
  
    // Format time as HH:MM:SS AM/PM (12-hour format)
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
    const time12Hour = `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(seconds)} ${ampm}`;
  
    // Display both formats
    console.log(`24-hour format: ${time24Hour}`);
    console.log(`12-hour format: ${time12Hour}`);
  }
  
  // Function to pad single-digit numbers with a leading zero
  function padWithZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  
  // Update the time every second
  function startClock() {
    setInterval(updateTime, 1000); // Calls updateTime every 1 second
  }
  
  startClock();
  