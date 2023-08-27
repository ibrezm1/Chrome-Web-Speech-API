// custom.js

$("#converse").click(function () {
  $(this).text("Toot"); // Change the text content of the clicked element
  toggleConversationalMode();
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
  "Feel free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any que free to ask any questions.",
  "Have a great day! 1",
  "Have a great day! 2",
  "Have a great day! 3",
  "Have a great day! 4"
];

let currentIndex = 0;

function addMessagesOverTime() {
  if (currentIndex < messageList.length) {
    addMessage(messageList[currentIndex], currentIndex % 2 !== 0);
    currentIndex++;
    setTimeout(addMessagesOverTime, 2000); // Add a new message every 2 seconds
  }
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
  }
}

// Start adding messages
addMessagesOverTime();
