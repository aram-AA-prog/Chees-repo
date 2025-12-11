let board = document.querySelector(".board")
let boardArr = []
let black = []
let white = []

let blackRook = new Image()
blackRook.style.width = "50px"
blackRook.style.height = "50px"
blackRook.src = "../img/blackRook.png"


let blackKnight = new Image()
blackKnight.style.width = "50px"
blackKnight.style.height = "50px"
blackKnight.src = "../img/blackknight.png"


let blackBishop = new Image()
blackBishop.style.width = "50px"
blackBishop.style.height = "50px"
blackBishop.src = "../img/blackBishop.png"

let blackKing = new Image()
blackKing.style.width = "50px"
blackKing.style.height = "50px"
blackKing.src =  "../img/blackKing.png"

let blackQueen = new Image()
blackQueen.style.width = "50px"
blackQueen.style.height = "50px"
blackQueen.src =  "../img/blackQueen.png"

let whitePlayersIcons = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
let blackPlayersIcons = [blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook]


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
    let blackSoliderIcon = new Image()
    blackSoliderIcon.src = "../img/blackSolider.png"
    blackSoliderIcon.style.width = "35px"
    blackSoliderIcon.style.height = "40px"
    blackSolider[i].appendChild(blackSoliderIcon)
}

for (let i = 0; i < blackPlayersIcons.length; i++) {
    blackPlayers[i].appendChild(blackPlayersIcons[i])
}


//white

for (let i = 0; i < white.length; i++) {
    if (i < 8) {
        whiteSolider.push(white[i])
    } else if (i >= 8) {
        whitePlayers.push(white[i])
    }
}

for (let i = 0; i < whiteSolider.length; i++) {
    let whiteSoliderIcon = new Image()
    whiteSoliderIcon.src = "../img/whiteSolider.png"
    whiteSoliderIcon.style.width = "35px"
    whiteSoliderIcon.style.height = "50px"
    whiteSolider[i].appendChild(whiteSoliderIcon)
}

for (let i = 0; i < whitePlayersIcons.length; i++) {
    whitePlayers[i].innerText = whitePlayersIcons[i]
}
