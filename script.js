function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("You", message);
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    appendMessage("Bot", reply);
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes("hello")) return "Hi there! How can I help you?";
  if (msg.includes("your name")) return "I'm a simple chatbot!";
  if (msg.includes("bye")) return "Goodbye! Have a great day!";
  return "I'm not sure how to respond to that.";
}
