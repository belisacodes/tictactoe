// config.js FILE: responsible fot all the logic realted to configuring players, open and close the overlay, takes the user input, validate it and store it

function openPlayerConfig(event) {
  // storing the player id in a variable (1,2)
  editedPlayer = +event.target.dataset.playerid; // with a '+' we convert the value into a number
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  // we want to restart the input when we put the name of player 1, for player 2, so we don not start the iput 2 with the same name
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  // if the form is submitted,then the page would be reloaded again with the entire game
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  //validate the input
  if (!enteredPlayername) {
    //enteredPlayername === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  //select the player according to the id of the html file 'player-1-data'
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  //change the corresponding player with the corresponding entered name
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
