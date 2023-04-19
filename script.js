// Get the element where the countdown will be displayed
const countdownElement = document.getElementById("countdown");

// Set the initial count value to 10
let count = 10;

// Define the countdown function
function countdown() {
  // Display the current count value
  countdownElement.textContent = count;

  // Decrement the count value
  count--;

  // If the count value is greater than 0, call the countdown function again after 1 second
  if (count > 0) {
    setTimeout(countdown, 1000);
  } else {
    // If the count value reaches 0, display "Happy Independence Day"
    countdownElement.textContent = "Happy Independence Day";
  }
}

// Call the countdown function to start the countdown
countdown();
