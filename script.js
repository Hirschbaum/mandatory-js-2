let gameFields = document.querySelectorAll('.column');        //console.log(gameFields); //array: 0-8
let turn = 0;

//------ take turns and stop it by 9:
for (let i = 0; i < gameFields.length; i++) {
    gameFields[i].addEventListener('click', function () {
        if (turn >= gameFields.length) return; //return: code below not happening if turn is bigger then 9
        if (turn % 2 === 0) {
            gameFields[i].innerHTML = "O";
            checkWinner();
        } else {
            gameFields[i].innerHTML = "X";
            checkWinner();
        }
        turn++;
    })
};

//------ refresh the game:
let button = document.querySelector('.newGameBtn');
button.addEventListener('click', function () {
    for (let i = 0; i < gameFields.length; i++) {
        gameFields[i].innerHTML = "";
        turn = 0; //turn to zero
    }
});

//------ check type and stop the game
function checkWinner() {
    let xWon = checkSame("X");
    let oWon = checkSame("O");
    
    if (xWon) {
        turn = gameFields.length; //to stop the game 
        alert("X won");
    } else if (oWon) {
        turn = gameFields.length;
        alert("O won");
    } else if (turn === gameFields.length) {
        alert("draw");
    }
}

//----- check, if the winning matches are the same/true
function checkSame(type) {
    let gFs = document.querySelectorAll('.column'); 
    let winningMatches = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < winningMatches.length; i++) {

        let same = true; //winningMatches[i][j] are the same

        for (let j = 0; j < winningMatches[i].length; j++) {
            let winField = winningMatches[i][j]; 
            let value = gFs[winField].innerHTML; // X or O 

            if (value !== type) {
                same = false;
                break;
            }
        }
        if (same === true) {
            return true;
        }
    }
    return false;
}