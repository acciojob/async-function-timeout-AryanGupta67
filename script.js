// Function to wait for a given number of milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function triggered on button click
async function handleSubmit() {
  // Get input values
  const message = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.innerText = "";

  // Wait for the specified delay
  await wait(delay);

  // Show message
  outputDiv.innerText = message;
}

// Add click event listener to the button
document.getElementById("btn").addEventListener("click", handleSubmit);

