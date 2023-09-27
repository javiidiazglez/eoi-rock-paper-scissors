const options = [
  {
    name: "rock", emoji: "🗿", loseTo: ["paper"],
  },
  {
    name: "paper", emoji: "📄", loseTo: ["scissors"],
  },
  {
    name: "scissors", emoji: "✂", loseTo: ["rock"],
  },
];
/* const getNumberRandom = (number) => Math.floor(Math.random() * number); */

const getNumberRandom = (number) => {
  const randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
};

let cpuChoice = null;
let playerChoice = null;

const buttonsDiv = Array.from(document.querySelectorAll(".options .btn"));

const determineWinner = (playerChoice, cpuChoice) => {
  if (playerChoice === cpuChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "scissors" && cpuChoice === "paper") ||
    (playerChoice === "paper" && cpuChoice === "rock")
  ) {
    return "You Win";
  } else {
    return "You Lost";
  }
};

const setResultText = (text) => {
  const resultDiv = document.querySelector(".result");

  resultDiv.textContent = `Player: ${playerChoice} - CPU: ${cpuChoice} - ${text}`;
};

const setPlayerChoice = (option) => {
  const type = option.classList.item(1);
  playerChoice = type;

  const cpuChoiceIndex = getNumberRandom(options.length); // 0,1,2
  cpuChoice = options[cpuChoiceIndex].name; // [rock],

  const text = determineWinner(playerChoice, cpuChoice);
  setResultText(text);
};

buttonsDiv.forEach(button => {
  button.addEventListener("click", () => setPlayerChoice(button));
});
