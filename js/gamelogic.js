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
 * Function to check if a coordinate has a chip
 * and return true if chip is at the input location (argument)
 * 
 * @param row (int): Row (y) of coordinate
 * @param col (int): Column (x) of coordinate
 * @return value (bool): True if coordinate is not empty
 */
function checkcoordinate(row, col) {
    var value = board[row][col];
    //https://www.sitepoint.com/java-ternary-operator/
    return value == 0 ? false : true; //cond ? condtrue : condfalse
}
 
/**
 * Function to get lowest empty position in a column
 * 
 * @param row (int): Row (y position) of input location (argument)
 * @param col (int): Column (x position) of input location (argument)
 * @return bottom (int): Lowest empty position of column
 */
function getcolbotempty(row, col) {
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

/**
 * Function to change turns and allow next player to move
 * as well as update UI
 */
function changeturn() {
    if (playertomove == "red") {
        playertomove = "yellow";
        $("playerui").removeClass(); //delete old text
        $("playerui").addClass(playertomove).text(UI["player2name"]); //add new text
    }
    //else playertomove == "yellow"
    else {
        playertomove = "red";
        $("playerui").removeClass();
        $("playerui").addClass(playertomove).text(UI["player1name"]);
    }
}

//Function to check if a player wins
function checkwin() {

}

/**
 * Function to check if players draw
 * Game cannot be a draw if there is at least one empty slot on board
 */
function checkdraw() {
    //recall board is 7x6
    for (var row = 0; row <= 5; row++) {
        for (var col = 0; col <= 6; col++) {
            if (board[][] == 0) {
                return false;
            }
        }
    }    
}