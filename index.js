// Remove the <main> element with id 'main' if it exists
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement("h1");

// Set the id of 'newHeader' to 'victory'
newHeader.id = "victory";

// Set the text content of 'newHeader'
newHeader.textContent = "Rose is the champion"; 

// Append the new <h1> element to the body
document.body.append(newHeader);
