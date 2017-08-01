/*
Contain the game logic to alter the state of the game
Functions affect board, players, and win conditions
*/

/**
 * Function to show board (variable from gameplayconstants) on HTML page
 */
function displayboard() {
    //recall board is 7x6
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col ++) {
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
 * @return value (bool): True if coordinate is not empty (False if empty)
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
 * as well as update UI to show current player's turn
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

/**
 * Function to check if a player wins
 * 
 * @return boolean: true if win, false otherwise
 */
function checkwin() {
    return horizontalline() || verticalline() || ascendingdiagonalline() || descendingdiagonalline();
}

/**
 * Function to check if there is a horizontal win (four of the same chips in a row)
 * Only need to check row of last placed chip
 * 
 * @param prevrow (int): Row (y) of last played chip
 * @return boolean: true if win, false otherwise
 */
function horizontalline(prevrow) {
    var currchip = null;
    var prevchip = 0;
    var count = 0;

    for (var col = 0; col < 7; col++) {
        currchip = board[prevrow][col];
        if (currchip == prevchip && currchip != 0) {
            count++;
        }
        else {
            count = 0;
        }
        //count == 3 when four chips are in a line
        if (count == UI.wincondition - 1) {
            return true;
        }
        //set previous chip to current chip for next comparison
        prevchip = currchip;
    }

    //else no horizontal line
    return false;
}

/**
 * Function to check if there is a vertical win (four of the same chips in a row)
 * Only need to check column of last placed chip
 * 
 * @param prevcol (int): Column (x) of last played chip
 * @return boolean: true if win, false otherwise
 */
function verticalline(prevcol) {
    var currchip = null;
    var prevchip = 0;
    var count = 0;

    for (var row = 0; row < 6; row++) {
        currchip = board[row][prevcol];
        if (currchip == prevchip && currchip != 0) {
            count++;
        }
        else {
            count = 0;
        }
        //count == 3 when four chips are in a line
        if (count == UI.wincondition - 1) {
            return true;
        }
        //set previous chip to current chip for next comparison
        prevchip = currchip;
    }

    //else no vertical line
    return false;
}

/**
 * Function to check if there is an ascending diagonal win (four of the same chips in a row)
 * 
 * @param prevrow (int): Row (y) of last played chip
 * @param prevcol (int): Column (x) of last played chip
 * @return boolean: true if win, false otherwise
 */
function ascendingdiagonalline(prevrow, prevcol) {
    var currchip = null;
    var prevchip = 0;
    var count = 0;

    for (var row = 0; row < 6; row++) {
        //for any coordinate in an ascending diagonal, sum of col and row are the same
        //thus when row increases by 1, col decreases by 1
        //row = 0 is the top-right of diagonal; row = 5 is the bottom-left of diagonal
        var col = prevcol + prevrow - row;
        if (col >=0 && col < 7) {

            currchip = board[row][col];
            if (currchip == prevchip && currchip != 0) {
                count++;
            }
            else {
                count = 0;
            }
            //count == 3 when four chips are in a line
            if (count == UI.wincondition - 1) {
                return true;
            }
            //set previous chip to current chip for next comparison
            prevchip = currchip;

        }
    }

    //else no ascending diagonal line
    return false;
}

/**
 * Function to check if there is a descending diagonal win (four of the same chips in a row)
 * 
 * @param prevrow (int): Row (y) of last played chip
 * @param prevcol (int): Column (x) of last played chip
 * @return boolean: true if win, false otherwise
 */
function descendingdiagonalline(prevrow, prevcol) {
    var currchip = null;
    var prevchip = 0;
    var count = 0;

    for (var row = 0; row < 6; row++) {
        //for a descending diagonal, sums of successive coordinates (col + row) increase by 2
        //thus when row increases by 1, col increases by 1
        //row = 0, is top-left of diagonal; row = 5 is the bottom-right of diagonal
        var col = prevcol - prevrow + row; //note prevcol-prevrow gives top-left of diagonal
        if (col >=0 && col < 7) {

            currchip = board[row][col];
            if (currchip == prevchip && currchip != 0) {
                count++;
            }
            else {
                count = 0;
            }
            //count == 3 when four chips are in a line
            if (count == UI.wincondition - 1) {
                return true;
            }
            //set previous chip to current chip for next comparison
            prevchip = currchip;

        }
    }

    //else no descending diagonal line
    return false;
}

/**
 * Function to check if players draw
 * Game cannot be a draw if there is at least one empty slot on board
 * 
 * @return boolean: true if draw, false otherwise
 */
function checkdraw() {
    //recall board is 7x6
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
            if (board[][] == 0) {
                return false;
            }
        }
    }    
}