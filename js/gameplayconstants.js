/*
Contain the gameplay constants and variables for game
*/

//UI object to hold names
//https://stackoverflow.com/questions/418799/what-does-colon-do-in-javascript
var UI = {
    player1name: "Player 1", //red
    player2name: "Player 2", //yellow
    startingplayer: "red", //player color
    turnmessage: "Player to move: ",
    invalidmovemessage: "Invalid move. Choose another coordinate.",
    drawmessage: "Draw!",
    winmessage: "Winner: ",
    wincondition: 4, //need this many chips in a row to win
    };

//Set Player 1 as starting player to move
var playertomove = UI.startingplayer;

/*
Define board as 2D array
0 represents empty
"red" and "yellow" represent chips
Connect Four boards are 7x6
*/
var board = [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]];