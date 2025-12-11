let board = document.querySelector(".board")
let boardArr = []
let black = []
let white = []

function IMG(url) {
    this.img = document.createElement("img")
    this.img.style.width = "50px"
    this.img.style.height = "50px"
    this.img.src = url
}
//black PNG
let blackRook = new IMG("../img/blackRook.png")
let blackKnight = new IMG("../img/blackknight.png")
let blackBishop = new IMG("../img/blackBishop.png")
let blackKing = new IMG("../img/blackKing.png")
let blackQueen = new IMG("../img/blackQueen.png")
let blackRook2 = new IMG("../img/blackRook.png")
let blackKnight2 =  new IMG("../img/blackknight.png")
let blackBishop2 =  new IMG("../img/blackBishop.png")

//white PNG
let whiteRook = new IMG("../img/whiteRook.png")
let whiteKnight = new IMG("../img/whiteKnight.png")
let whiteBishop = new IMG("../img/whiteBishop.png")
let whiteKing = new IMG("../img/whiteKing.png")
let whiteQueen = new IMG("../img/whiteQueen.png")
let whiteRook2 = new IMG("../img/whiteRook.png")
let whiteKnight2= new IMG("../img/whiteKnight.png")
let whiteBishop2 = new IMG("../img/whiteBishop.png")

//-------

let whitePlayersIcons = [whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2]
let blackPlayersIcons = [blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2]

console.log(blackPlayersIcons);



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
    blackPlayers[i].appendChild(blackPlayersIcons[i].img)
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
    whitePlayers[i].appendChild( whitePlayersIcons[i].img)
}
