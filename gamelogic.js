/*
Contain the game logic to alter the state of the game
Functions affect board, players, and win conditions
*/

//Function to show board (variable from gameplayconstants) on HTML page
function displayboard() {
    //recall board is 7x6
    for (var row = 0; row <= 5; row++) {
        for (var col = 0; col <= 6; col ++) {
            if (board[row][col] != 0) {
                //https://www.w3schools.com/tags/tag_tr.asp
                //https://www.w3schools.com/tags/tag_td.asp
                var cell = $("tr:eq(" + row + ")").find('td').eq(col);
                cell.children('button').addClass(board[row][col]);
            }
        }
    }
}

//Function to place chips on board
function placechip() {

}

//Function to change turns and allow next player to move
function changeturn() {

}

//Function to check if a player wins
function checkwin() {

}

//Function to check if players draw
function checkdraw() {
    
}