// custom.js

// Add a click event listener to the "Send" button.
$("#sendMessage").click(function () {
  const userMessage = $("#userMessage").val();
  addMessage(userMessage, true); // Call addMessage with the user's message.
});

$("#converse").click(function () {
  $(this).text("Toot"); // Change the text content of the clicked element
  toggleConversationalMode();
});

$("#userMessage").keydown(function (event) {
  // Check if the key pressed is Enter (key code 13).
  if (event.which === 13) {
    // Prevent the default behavior of the Enter key (form submission).
    event.preventDefault();

    // Get the user's message from the input field.
    const userMessage = $(this).val();

    // Call the addMessage function with the user's message.
    addMessage(userMessage, true);

    // Clear the input field after sending the message (optional).
    $(this).val("");
  }
});

let conversationalMode = false;
function toggleConversationalMode() {
  conversationalMode = !conversationalMode;
  if (conversationalMode) {
    currentIndex = 0; // Reset the message index when enabling conversational mode
    addMessagesOverTime();
    $("#converse").text("🤐 Stop");
  } else {
    $("#converse").text("😄 Start");
  }
}

const messageList = [
  "Hello there!",
  "How are you?",
  "I hope you are enjoying this demo.I hope you are enjoying this demo.I hope you are enjoying this demo.I hope you are enjoying this demo.I hope you are enjoying this demo.I hope you are enjoying this demo.I hope you are enjoying this demo.I hope you are enjoying this demo.",
  "Feel free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any questions."
];

let currentIndex = 0;

function addMessagesOverTime() {
  if (currentIndex < messageList.length) {
    addMessage(messageList[currentIndex], currentIndex % 2 !== 0);
    currentIndex++;
    setTimeout(addMessagesOverTime, 2000); // Add a new message every 2 seconds
  }
}

function addBotResponse() {
  setTimeout(addMessage("Bot Working"), 1000);
}

function addMessage(message, isUserMessage = false) {
  if (conversationalMode) {
    const resultsDiv = document.getElementById("results1");

    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("message-wrapper");

    if (isUserMessage) {
      messageElement.classList.add("user-message");
    } else {
      messageElement.classList.add("bot-message");
    }

    resultsDiv.appendChild(messageElement);

    resultsDiv.scrollTop = resultsDiv.scrollHeight;

    // Check if the message contains the wake word "Jarvis."
    const containsWakeWord = message.toLowerCase().includes("jarvis");
    if (containsWakeWord) {
      addBotResponse();
      addCardToTrello("test card111");
    }
  }
}

// Start adding messages
addMessagesOverTime();
