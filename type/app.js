var divGenerateNum = document.getElementsByClassName("generate-number")[0];
var button = document.getElementById("button");
var inputOne = document.getElementById("player-one");
var inputTwo = document.getElementById("player-two");
button.addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  if (inputOne.value === "" || inputTwo.value === "") {
    button.disabled();
    alert("Inserisci dei valori prima di scoprire il numero");
    button.disabled();
  } else if (inputOne.value > 100 || inputTwo.value > 100) {
    alert("Inserisci un numero compreso tra 0 e 100");
  } else {
    divGenerateNum.innerText = randomNumber;
  }
  var playerOneDifference = Math.abs(inputOne.value - randomNumber);
  var playerOneDifferenceTwo = Math.abs(inputTwo.value - randomNumber);
  if (inputOne.value === randomNumber) {
    alert("Il giocatore 1 ha vinto");
  } else if (inputTwo.value === randomNumber) {
    alert("Il giocatore 2 ha vinto");
  } else {
    if (playerOneDifference > playerOneDifferenceTwo) {
      alert("Il giocatore 2 ha vinto perché si è avvicinato di più");
    } else {
      alert("Il giocatore 1 ha vinto perché si è avvicinato di più");
    }
  }
});
