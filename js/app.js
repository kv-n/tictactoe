let gameBoard;  
let winner = null;
let playerTurn;
let nextBattle = document.getElementById('new');
nextBattle.addEventListener('click', newGame);

let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

function newGame(){
    document.location.reload()
};

let renderLookUp = {
    '1': '<img src="images/death-star.png"/>',
    '-1': '<img src="images/millennium-falcon.png"/>',
    null: ' ',
}

//New Game Click Event
let n = document.getElementById("new");
n.addEventListener('click', newGame);

//New Game Function
function newGame() {
    document.location.reload()
}

const game = {
    init() {
        gameBoard = [0, 0 ,0, 0 ,0 ,0 ,0 ,0, 0];
      playerTurn = 1;
    },
     
    calculateWinner() {
         let winArray = []; 
        for (let i = 0; i < winCombos.length; i++) {
            let boardArray = []; 
            for (let j = 0; j < winCombos[i].length; j++) {
               boardArray.push(parseInt(gameBoard[winCombos[i][j]]));
             }
        winArray.push(boardArray); 
        }
        for(i = 0; i < winCombos.length; i++) {
           winArray[i].reduce(function (acc, total) {
            return winArray[i] = acc += total; 
           }, 0);
           if (winArray[i] === 3) {
                alert('EMPIRE WINS');
            } else if (winArray[i] === -3) {
                alert('REBELS WIN');
            }
        }
        console.log(winArray); 
    },  
    
    //represents the data on the board 
    render() {
        gameBoard.forEach( (idx, square) => {
            let playerID = gameBoard[idx];
            let fill = renderLookUp[playerID];
            square.innerHTML = fill;   
        })
            
    }
}

document.querySelector('table').addEventListener('click', function (e){
    let index =  parseInt(e.target.id.replace('square-', '')); 
    
    if(gameBoard[index] === 0) {
        if (playerTurn === 1) {
            e.target.innerHTML = renderLookUp['1'];
            gameBoard[index] = playerTurn; 
        } else if (playerTurn === -1) {
            e.target.innerHTML = renderLookUp['-1'];
            gameBoard[index] = playerTurn; 
        }  else if (counter >= 10) {
                    alert("GAME IS A DRAW!");
                }
        game.render();
        game.calculateWinner();
        playerTurn *= -1; 
        
    }
});

game.init();



































// let gameBoard;
// const playerX = "x";
// const playerO = "o";
// let counter = 0;
// let currentPlayer = playerX;
// let winCounter = 0;
// let board = document.getElementsByTagName('table');
// // let turn = document.getElementById('players-turn');
// let playerTurn;
// let winCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [6, 4, 2]
// ]

// //DOGS VS CATS
// let renderLookUp = {
//     '1': '<img src="images/dog.png"/>',
//     '-1': '<img src="images/cat.png"/>',
//     null: ' ',
// }




// const game = {
//     init() {
//         gameBoard = [null, null, null, null, null, null, null, null, null];
//         playerTurn = 1;
//     },

//     render() {
//         gameBoard.forEach((idx, square) => {
//             let playerID = gameBoard[idx];
//             let fill = renderLookUp[playerID];
//             square.innerHTML = fill;
//         })
//     }
// }

// document.querySelector('table').addEventListener('click', function (e) {
//     console.log(e.target);
//     let index = parseInt(e.target.id.replace('square-', ''));
//     console.log(gameBoard[index]);

//     if (gameBoard[index] === null) {
//         e.target.innerHTML = renderLookUp[playerTurn];
//         gameBoard[index] = playerTurn;
//         counter++;
//         checkForWin(playerX)
//         console.log(`It is ${renderLookUp[playerTurn]}'s Turn`)
//     } 
//     game.render();
//     playerTurn *= -1;

// })

// function checkForWin(movesArray, name){
//     // loop over the first array of winning combinations
//     for (i = 0; i < winCombos.length; i++) {
//       // reset the winCounter each time!
//       winCounter = 0;
//       // loop over each individual array
//       for (var j = 0; j < winCombos[i].length; j++) {
//         // if the number in winning combo array is === a number in moves array, add to winCounter
//         if(movesArray.indexOf(winCombos[i][j]) !== -1){
//           winCounter++;
//         }
//         // if winCounter === 3 that means all 3 moves are winning combos and game is over!
//         if(winCounter === 3){
//           alert("Game over, " + name + " wins!");
//           resetBoard();
//         }
//       }
//     }
//   }



// game.init();
// game.render();


