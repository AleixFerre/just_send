// Add an event listener to the input field to enable/disable the download button
const fileNameInput = document.getElementById("fileName");
const downloadButton = document.getElementById("downloadButton");

fileNameInput.addEventListener("input", () => {
  if (fileNameInput.value.trim() === "") {
    downloadButton.disabled = true;
  } else {
    downloadButton.disabled = false;
  }
});

function navigateToFile() {
  const fileName = fileNameInput.value;

  if (fileName) {
    // Navigate to the desired URL
    window.location.href = `/download/${fileName}`;
  }
}
