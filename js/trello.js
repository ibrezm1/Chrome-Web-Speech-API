// Replace with your Trello API key, token, board ID, and list ID.
const apiKey = "99ad1283fce46e4dc5be6b36a2cf3707";
const apiToken =
  "ATTA07c96840d8fa79389b0e84c1e5064dd3593f1a80ff06ce6e4c37bfbaf83827b55CB05221";
const listId = "64fd81523d8737612e6905db";

// Define a function to add a card to Trello.
function addCardToTrello(cardName) {
  const url = `https://api.trello.com/1/cards?idList=${listId}&key=${apiKey}&token=${apiToken}`;

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const formdata = new FormData();
  formdata.append("name", cardName);
  formdata.append("desc", "testdesc");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow"
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.id) {
        return `Card "${cardName}" created successfully.`;
      } else {
        return "Failed to create the card.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      return "An error occurred while creating the card.";
    });
}

// Attach the function to the global scope (window in a browser).
window.addCardToTrello = addCardToTrello;
// https://trello.com/b/6XFIzV3c/temp
// Example usage:
// Call addCardToTrello with the cardName as an argument to add a card.
// addCardToTrello("Sample Card").then((result) => {
//   alert(result);
//   // You can perform additional actions here if needed.
// });
