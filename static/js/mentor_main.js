document.addEventListener("DOMContentLoaded", function () {
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  // Function to append messages to chat
  function appendMessage(sender, message) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(sender);
    msgDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Function to send a message
  function sendMessage(message) {
    appendMessage("user-message", message);

    fetch("/get_response", {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => appendMessage("bot-message", data.response))
      .catch((error) => console.error("Error:", error));
  }

  // Function to show predefined options
  function showOptions(options) {
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("bot-options");

    options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-button");
      btn.onclick = () => {
        chatMessages.removeChild(optionsDiv); // Remove options after selection
        sendMessage(option);
      };
      optionsDiv.appendChild(btn);
    });

    chatMessages.appendChild(optionsDiv);
  }

  // Default bot greeting
  appendMessage("bot-message", "Hello! How can I assist you today?");
  showOptions(["Career Advice", "Resume Tips", "Job Search Help", "Interview Preparation"]);

  // Handle user input manually
  sendBtn.addEventListener("click", function () {
    const message = userInput.value.trim();
    if (message !== "") {
      sendMessage(message);
      userInput.value = "";
    }
  });

  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const message = userInput.value.trim();
      if (message !== "") {
        sendMessage(message);
        userInput.value = "";
      }
    }
  });
});
