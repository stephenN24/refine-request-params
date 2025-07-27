document.getElementById("apiRequest").addEventListener("input", function () {
  const originalApiRequest = this.value;
  const refinedURL = refineAPIRequest(originalApiRequest);

  document.getElementById("outputLink").value = refinedURL;

  // Auto-copy the generated URL to the clipboard
  copyToClipboard(refinedURL);
});

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const copyBtn = document.getElementById("copyBtn");
      copyBtn.textContent = "Copied";
      copyBtn.classList.add("copied");

      // Reset the button text after 2 seconds
      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("copied");
      }, 2000);
    })
    .catch((err) => {
      alert("Failed to copy text: ", err);
    });
}

function refineAPIRequest(url) {
  const urlObj = new URL(url);
  urlObj.searchParams.delete("widgetId");
  return urlObj.toString();
}
