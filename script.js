function em() {
    document.getElementById("msg").innerHTML = "Email sent successfully!";
}

function sendMessage() {
  let input = document.getElementById("input");
  let msg = input.value.trim();
  if (msg === "") return;

  addMessage(msg, "user");
  let reply = getBotReply(msg);
  
  setTimeout(() => {
    addMessage(reply, "bot");
  }, 500);

  input.value = "";
}

function addMessage(text, sender) {
  let messages = document.getElementById("messages");
  let div = document.createElement("div");
  div.className = sender;
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! 😊";
  } 
  else if (msg.includes("how are you")) {
    return "I'm fine! How about you?";
  } 
  else if (msg.includes("your name")) {
    return "I'm a simple chatbot 🤖";
  } 
  else {
    return "Sorry, I don't understand 😅";
  }
}