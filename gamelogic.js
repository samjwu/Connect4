/*
Contain the game logic to alter the state of the game
Functions affect board, players, and win conditions
*/

/**
 * Function to show board (variable from gameplayconstants) on HTML page
 */
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

/**
 * Function to get lowest empty position in a column
 * 
 * @param col (int): Column (x position) of input location (argument)
 * @param row (int): Row (y position) of input location (argument)
 * @return bottom (int): Lowest empty position of column
 */
function getcolbotempty() {
    //recall a board has 6 rows (6 y positions to iterate over)
    //top is row = 0, bottom is row = 5 
    for (var bot = 5; bot > row; bot--) {
        if (board[bot][col] == 0) {
            return bot;
        }
    }
    return bot;
}

/**
 * Function to place chips on board
 * 
 * @param color (string): Current player to move's color
 * @param row (int): Row (y) of placed chip
 * @param col (int): Column (x) of placed chip
 */
function placechip(color, row, col) {
    board[row][col] = color;
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