/*
Contain code for player to interact with DOM
Uses game logic functions to allow player to play game
*/

//Add text for turn messages
function uiturnmessage() {
    if (playertomove == "red") {
        $("#playerui").removeClass(); //delete old formatting
        $("#playerui").addClass(playertomove).text(UI["player1name"]); //add new text
    }
    //else playertomove == "yellow"
    else {
        $("#playerui").removeClass();
        $("#playerui").addClass(playertomove).text(UI["player2name"]);
    }
}

//Run js once DOM (HTML page) is loaded
//https://www.w3schools.com/js/js_syntax.asp
//https://stackoverflow.com/questions/1150381/what-is-the-meaning-of-sign-in-javascript
//https://learn.jquery.com/using-jquery-core/dollar-object-vs-function/
//https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    //Get player names
    //https://www.w3schools.com/jsref/met_win_prompt.asp
    UI.player1name = prompt("Enter Player 1 Name:", UI.player1name);
    UI.player2name = prompt("Enter Player 2 Name:", UI.player2name);

    //Variable for turn messages
    $('.uimsg').text(UI.turnmessage); 

    //Add text for turn messages
    uiturnmessage();

    //Variables to keep track of position of last played chip
    var prevrow = null;
    var prevcol = null;

    //Function for running game after button click on board
    $(".board button").click(function(event) {        
        //Get position of button
        var row = $(".board tr").index($(this).closest("tr")); //y
        var col = $(this).closest("tr").find("td").index($(this).closest("td")); //x
        row = getcolbotempty(row, col); //get bottom y position

        //If position is not empty, display error message
        if (checkcoordinate(row, col)) {
            alert(UI.invalidmovemessage);
            return;
        }

        //If valid move, place chip, record move, and display board
        placechip(playertomove, row, col);
        prevrow = row;
        prevcol = col;
        displayboard();

        //Go to next player's turn
        playertomove = changeturn();

        //Check for win/draw conditions
        if (checkwin(prevrow, prevcol)) {
            //End game by removing the click eventlistener
            $(".board button").unbind("click");
            playertomove = changeturn();
            $(".uimsg").text(UI.winmessage);
            uiturnmessage(); //winning player
            $(".playagain").show("slow");
            return;
        }
        else if (checkdraw()) {
            //End game by removing the click eventlistener
            $(".board button").unbind("click");
            $(".uimsg").text(UI.drawmessage);
            $("#playerui").empty(); //delete player to move text
            $(".playagain").show("slow");
            return;
        }
        else {
            uiturnmessage();
        }
    });

    //Play again function
    $(".playagain").click(function(event) {
        //https://www.w3schools.com/jsref/met_loc_reload.asp
        location.reload();
    });

});