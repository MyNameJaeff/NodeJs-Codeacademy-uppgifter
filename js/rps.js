let computerChose = document.getElementById("computerChoise");
let result = document.getElementById("result");

const playerChoise = (choise) => {
  rpsStart(choise);
};

const computerChoise = () => {
  let choise = Math.floor(Math.random() * 3);
  switch (choise) {
    case 0:
      choise = "rock";
      break;
    case 1:
      choise = "paper";
      break;
    case 2:
      choise = "scissors";
      break;
  }
  return choise;
};

const rpsStart = (playerChoise) => {
    let string = "";
  const compChoise = computerChoise();
  if (playerChoise == compChoise) {
    string = (`Tie! (player: ${playerChoise}, computer: ${compChoise})`);
  } else if (
    (playerChoise == "rock" && compChoise == "scissors") ||
    (playerChoise == "scissors" && compChoise == "paper") ||
    (playerChoise == "paper" && compChoise == "rock")
  ) {
    string = (`Player wins! (player: ${playerChoise}, computer: ${compChoise})`);
  }else{
    string = (`Computer wins! (player: ${playerChoise}, computer: ${compChoise})`);
  }
  computerChose.innerHTML = `<img src='../img/${compChoise}.png' alt='${compChoise}'>`;
  result.innerText = string;
};
