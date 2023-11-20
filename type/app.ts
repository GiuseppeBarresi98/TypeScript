let divGenerateNum: any = document.getElementsByClassName("generate-number")[0];
let button: any = document.getElementById("button");
let inputOne: any = document.getElementById("player-one");
let inputTwo: any = document.getElementById("player-two");

button.addEventListener("click", function () {
  let randomNumber: any = Math.floor(Math.random() * 100 + 1);

  if (inputOne.value === "" || inputTwo.value === "") {
    alert("Inserisci dei valori prima di scoprire il numero");
    button.disabled = true;
  } else if (inputOne.value > 100 || inputTwo.value > 100) {
    alert("Inserisci un numero compreso tra 0 e 100");
    button.disabled = true;
  } else {
    divGenerateNum.innerText = randomNumber;
  }

  let playerOneDifference: number = Math.abs(inputOne.value - randomNumber);
  let playerOneDifferenceTwo: number = Math.abs(inputTwo.value - randomNumber);

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
