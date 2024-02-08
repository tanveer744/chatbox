function sendMessage() {
    var message = document.getElementById("user-input").value;
    if (message.trim() !== "") {
      var chatBox = document.getElementById("chat-box");
      var userMessage = document.createElement("div");
      userMessage.className = "message outgoing";
      userMessage.innerHTML = message;
      chatBox.appendChild(userMessage);
      document.getElementById("user-input").value = "";
      // Simulate a response from the bot after 1 second
      setTimeout(sendBotResponse, 1000);
    }
  }
  
  function sendBotResponse() {
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "message incoming";
    botMessage.innerHTML = "This is a response from the bot.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  