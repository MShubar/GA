// --------constants----------//

// --------variables----------//

let board = ["", "", "", "", "", "", "", ""]
let turn = "X"

// --------chashed elements---------//
const squareEls = document.querySelectorAll(".sqr")

// ---------functions-----------//
const handleClick = (click) => {
  let squareIndex = event.target.id
  if (squareIndex !== "") {
    console.log(squareIndex)
    console.log(board)
    board[squareIndex] = turn
    changeTurn()
  }
}

const updateBoard = () => {
  squareEls.forEach((square, index) => {
    square.textContent = board[index]
  })
}

const changeTurn = () => {
  if (turn === "X") {
    turn = "O"
  } else if (turn === "O") {
    turn = "X"
  }
}

const init = (event) => {
  handleClick(event)
  updateBoard()
}
// ---------- listeners ---------//
squareEls.forEach((square) => {
  square.addEventListener("click", init)
})
