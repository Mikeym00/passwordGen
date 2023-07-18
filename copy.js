

// copyText.addEventListener("click", myFunction);


function myFunction() {
    const copyText = document.getElementById("passwordString");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied your new password: " + copyText.value);
  }