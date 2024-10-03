/*-------------------------------- Constants --------------------------------*/
// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages
const choices = ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/
// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round
let playerChoice
let computerChoice
let message

/*------------------------ Cached Element References ------------------------*/
const resultDisplayElement = document.querySelector('#result-display')
/*-------------------------------- Functions --------------------------------*/
// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player
//    Include both player and computer selections in the message
//    Clearly indicate who won
const getPlayerChoice = (event) => {
  playerChoice = event.target.id
}

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length)
  computerChoice = choices[randomIndex]
}

const compare = () => {
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    message = 'congrats! you win!'
  } else if (playerChoice === computerChoice) {
    message = `tie`
  } else {
    message = `computer won`
  }
}

const render = () => {
  resultDisplayElement.textContent = `you chose ${playerChoice} and the computer chose ${computerChoice}. ${message}`
}
const play = (event) => {
  getPlayerChoice(event)
  getComputerChoice()
  compare()
  render()
}

/*----------------------------- Event Listeners -----------------------------*/
// 3) Handle a player clicking a button
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', play)
})

// 4) Handle generating random selections for the computer player
