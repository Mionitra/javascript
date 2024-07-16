var puzzleContainer = document.querySelector("#puzzle");
var deplacement = document.querySelector('#moves');
deplacement.textContent = moves;
function startNewGame() {
    var randomOrder = new Array();
    var randomNumber = 0;
    var count = 0;
    moves = 0;
  
    deplacement.innerHTML = moves;
  
    boardArray = new Array(3);
    for (var i = 0; i < 3; i++) {
      boardArray[i] = new Array(3);
    }
  
    var unusedNumber = new Array(3 * 3);
    for (var i = 0; i < 3 * 3; i++) {
      unusedNumber[i] = 0;
    }
  
    for (var i = 0; i < 3 * 3; i++) {
      randomNumber = Math.floor(Math.random() * 3 * 3);
      if (unusedNumber[randomNumber] == 0) {
        unusedNumber[randomNumber] = 1;
        randomOrder.push(randomNumber);
      } else {
        i--;
      }
    }
  
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        boardArray[i][j] = randomOrder[count];
        count++;
      }
    }
    showTable();
  }
  
  function showTable() {
    var tableString = "";
    for (var i = 0; i < 3; i++) {
      tableString += "<tr>";
      for (var j = 0; j < 3; j++) {
        if (boardArray[i][j] == 0) {
          tableString += '<td class="blank">0</td>';
        } else {
          tableString +=
            '<td class="tile" onclick="moveThisTile(' +
            i +
            "," +
            j +
            ')">' +
            boardArray[i][j] +
            "</td>";
        }
      }
      tableString += "</tr>";
    }
    puzzleContainer.innerHTML = tableString;
  }
  
  function moveThisTile(tableRow, tableColumn) {
    if (
      checkIfMoveable(tableRow, tableColumn, "up") ||
      checkIfMoveable(tableRow, tableColumn, "down") ||
      checkIfMoveable(tableRow, tableColumn, "left") ||
      checkIfMoveable(tableRow, tableColumn, "right")
    ) {
      incrementMoves();
    } else {
      alert("ERROR: Cannot move tile!\nTile must be next to a blank space.");
    }
  
    if (checkIfWinner()) {
      alert(
        "Congratulations!, " +
          playerName +
          ". You've solved the puzzle in " +
          moves +
          " moves."
      );
      startNewGame();
    }
  }
  
  function checkIfMoveable(currentRow, currentColumn, direction) {
    rowOffset = 0;
    columnOffset = 0;
    if (direction == "up") {
      rowOffset = -1;
    } else if (direction == "down") {
      rowOffset = 1;
    } else if (direction == "left") {
      columnOffset = -1;
    } else if (direction == "right") {
      columnOffset = 1;
    }
  
    if (
      currentRow + rowOffset >= 0 &&
      currentColumn + columnOffset >= 0 &&
      currentRow + rowOffset < rows &&
      currentColumn + columnOffset < columns
    ) {
      if (boardArray[currentRow + rowOffset][currentColumn + columnOffset] == 0) {
        boardArray[currentRow + rowOffset][currentColumn + columnOffset] =
          boardArray[currentRow][currentColumn];
        boardArray[currentRow][currentColumn] = 0;
        showTable();
        return true;
      }
    }
    return false;
  }
  
  function checkIfWinner() {
    var count = 0;
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        if (boardArray[i][j] != count) {
          return false;
        }
        count++;
      }
    }
    return true;
  }
  
  function incrementMoves() {
    moves++;
    countMoves.innerHTML = moves;
  }
  