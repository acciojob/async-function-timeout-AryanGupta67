// Utility function that returns a Promise resolving after `ms` milliseconds
function delayFor(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main async function triggered on button click
async function showMessageAfterDelay() {
  // Get values from input fields
  const message = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);
  const outputDiv = document.getElementById("output");

  // Clear any previous output
  outputDiv.innerText = "";

  // Await the specified delay
  await delayFor(delay);

  // Display the message after the delay
  outputDiv.innerText = message;
}

// Attach event listener to the button
document.getElementById("btn").addEventListener("click", showMessageAfterDelay);

