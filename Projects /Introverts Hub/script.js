document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value.trim();
    
    if (message !== "") {
        const messagesDiv = document.getElementById("messages");
        
        // Create new message bubble
        const messageBubble = document.createElement("div");
        messageBubble.textContent = message;
        messageBubble.className = "chat-message";
        
        messagesDiv.appendChild(messageBubble);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Auto-scroll to the latest message
        
        // Clear input
        chatInput.value = "";
    }
});
