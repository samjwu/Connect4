var gameField = new Array();
var board = document.getElementById("board");

newgame();

function newgame(){
  prepareField();
}

function prepareField(){
  gameField = new Array();
  for(var i = 0; i < 6; i++){
    gameField[i] = new Array();
    for(var j = 0; j < 7; j++){
      gameField[i].push(0);
    }
  }
}
