export function getCurrentDate() {
    // Create an array of weekday names and month names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    // Create a new Date object
    const currentDate = new Date();

    // Get the current year, month, date, day
    const year = currentDate.getFullYear();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const dayOfWeek = weekdays[currentDate.getDay()];

    // Format the date as a string
    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
    return formattedDate
    // Display the result
    // console.log("Current Date:", formattedDate);

}

