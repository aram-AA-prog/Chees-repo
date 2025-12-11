let board = document.querySelector(".board")
let boardArr = []
let black = []
let white = []
let whitePlayersIcons = ["♖","♘","♗","♕","♔","♗","♘","♖"]
let blackPlayersIcons = ["♜","♞","♝","♛","♚","♝","♞","♜"]


let blackSolider = []
let blackPlayers = []

let whiteSolider = []
let whitePlayers = []

for (let i = 0; i < 64; i++) {
    let squares = document.createElement("div")
    squares.classList.add("squares")
    boardArr.push(squares)
    board.appendChild(squares)
}

for (let i = 0; i < boardArr.length; i++) {
    if (i < 16) {
        black.push(boardArr[i])
    } else if (i >= 48) {
        white.push(boardArr[i])
    }
}


// black

for (let i = 0; i < black.length; i++) {
    if (i < 8) {
        blackPlayers.push(black[i])
    } else if (i >= 8) {
        blackSolider.push(black[i])
    }
}

for (let i = 0; i < blackSolider.length; i++) {
    blackSolider[i].innerText = "♟️"
}

for(let i = 0; i < blackPlayersIcons.length; i++){
    blackPlayers[i].innerText = blackPlayersIcons[i]
}


//white

for (let i = 0; i < white.length; i++) {
    if (i < 8) {
        whiteSolider.push(white[i])
    } else if (i >= 8) {
        whitePlayers.push(white[i])
    }
}

for(let i = 0; i < whiteSolider.length; i++){
    whiteSolider[i].innerText = "♙"
}

for(let i = 0; i < whitePlayersIcons.length; i++){
    whitePlayers[i].innerText = whitePlayersIcons[i]
}
