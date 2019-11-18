let gameBoard = document.querySelector('.container');
let gameFields = document.querySelectorAll('.column');
console.log(gameFields); //array: 0-8
let turn = 0;

for (let i = 0; i < gameFields.length; i++) {
    gameFields[i].addEventListener('click', function () {
        if (turn % 2 === 0) {
            gameFields[i].innerHTML = "O";
        } else {
            gameFields[i].innerHTML = "X";
        }
        turn++;
    })
};

let button = document.querySelector('.newGameBtn');
button.addEventListener('click', function() {
    for (let i = 0; i < gameFields.length; i++) {
        gameFields[i].innerHTML = ""; //det är tomt i devtools :|
    }
});






function checkBoard() {
    let boardCells = Array.from(document.querySelectorAll('.column'));
    console.log(boardCells); //array
    let winningMatches = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
}

function checkForWinner() {
    let winner = false;
    //and after that?
}


//if more X, alert Player X won, otherwise Player Y won.




/*
function game() {
    let board;
    let player1;
    let player2;
    let turn = 0;

}

function takeTurn() { //behövs nåt som argument?
    if (turn % 2 === 0) {
        player1.takeTurn();
    } else {
        player2.takeTurn();
    }
    turn++
};
*/