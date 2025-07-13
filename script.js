// Delay function that returns a Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function triggered by button
async function showMessage() {
  const message = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);
  const output = document.getElementById("output");

  // Clear previous output
  output.textContent = "";

  // Wait for specified delay
  await wait(delay);

  // Show message
  output.textContent = message;
}

// Attach listener
document.getElementById("btn").addEventListener("click", showMessage);

