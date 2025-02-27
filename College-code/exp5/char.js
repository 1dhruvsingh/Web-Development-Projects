function updateCounter() {
    let textInput = document.getElementById("textInput");
    let charCount = document.getElementById("charCount");
    charCount.textContent = `${textInput.value.length}/150 characters used`;
} 