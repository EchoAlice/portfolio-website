const createBoard = (input) => {
  let board = []; 
  let board_rows = input.split("\r\n");
  
  // Creates an array of arrays!
  for (let r = 0; r < 5; r++){
    let row_values = board_rows[r].split(' ');
    deleteSpace(row_values);
    board.push(row_values);
  }
  return board
};

const deleteSpace = (row_values) => {
  for (let r = 0; r < row_values.length; r++) {
    if (row_values[r] === "") {
      row_values.splice(r, 1)
    }
  }
}

/**
 * Function compares a board's values to the number called in bingo.
 * If a value on the board equals the number called, record value 
 * and replace board's value with "T" 
 */
const markBoard = (number, board) => {
  let column = board.length;
  let row = board[0].length;
  
  for (let c = 0; c < column; c++) {
    for (let r = 0; r < row; r++) {
      if (number === board[c][r]) {
        // Create function that records the board's value being replaced
        board[c][r] = "T"; 
        return
      } 
    }
  }
// return
}

const checkBingo = (board) => {
  // Check board
  let column = board.length;
  let row = board[0].length;
 
  for (let c = 0; c < column; c++) {
    // Resets count after every row/column
    let row_count = 0;
    let column_count = 0;
    for (let r = 0; r < row; r++) {
      // Checks each row 
      if (board[c][r] === "T"){
        row_count++; 
      }
      if (row_count === 5){
        return true;
      }
      // Checks each column
      // Realizing that i could just change the variables' positions around to go through
      // each value in a column instead of a row was huge.  Enlightening 
      if (board[r][c] === "T") {
        column_count++;
      }
      if (column_count === 5) {
        return true;
      }
    }
  } 
  return false
}

/**
 * find the sum of all unmarked numbers on winning board
 * then multiply that sum by the number that was just called
 */
const calculateBoard = (board, number_just_called) => {
  let column = board.length;
  let row = board[0].length;
  let board_sum = 0;

// I forgot that all board values were strings, even the "numbers". Was getting a calculation error.
// Made a smooth little change in code right away.  Realized that all values
// not "T" should be string versions of ints.  Feels good to connect the dots
  for (let c = 0; c < column; c++) {
    for (let r = 0; r < row; r++) {
      if (board[c][r] !== "T") {
        board_sum += parseInt(board[c][r]);
      }
    }
  }
  
  let answer = board_sum * number_just_called;
  return answer;
}

const Day4Solution = (input) => {
  let boards = []; 

  // This parses input into 3 (gross) boards. Need to clean 'em up!
  const boards_input = input.split("\r\n\r\n");
  const numbers = boards_input[0].split(",");

  // Creates an array of clean boards.  
  for (let b = 1; b < boards_input.length; b++) {
    boards[b] = createBoard(boards_input[b]);
  }

  // Cycles through every number and every board
  for (let n = 0; n < numbers.length; n++) {
    for (let b = 1; b < boards.length; b++) {
      markBoard(numbers[n], boards[b]); 
      if (n >= 5){
        // check if someone has won!
        let bingo = checkBingo(boards[b]);
        if (bingo === true){
        // Make board calculation
          let answer = (calculateBoard(boards[b], numbers[n]));
          return (
            answer
          )
        }
      } 
    }
  }
}

export default Day4Solution;
