// /**
//  * Create a function that makes a board
//  * This function might not be necessary 
//  */
// function createBoard(2d_array) {
//   for (let c = 0; c < 5; c ++) {
    
//   }
// }
// /**
//  * Boolean function that compares each row_value to the number in question
//  */
// function compare(number, values) {
//   for (let n = 0; n < numbers.length; n++) { 
//     if (numbers[n] === value) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   } 
// }

/**
 * Functions to create:
 * Creates the list of numbers to compare with
 * Creates each board with individual values
 * Function: Takes in number to compare, compare number with every value on every board
 * Function: Records when number matches value on a board
 */

const Day4Solution = (input) => {
  let board_number = 0;
  let board_row = [];
  let row_value = [];
  let board = [[]]; 
  
  // Parses file, separating string into individual values
  // .split() returns a new array
  const bingo_input = input.split("\r\n");
  const numbers = bingo_input[0].split(","); 
  
  /**
   * Parses input further into individual values 
   */
  for (let c = 1; c < bingo_input.length; c ++) {
    /**
     * Separates row into array of individual integers
     */ 
    board_row = bingo_input[c].split(' ');
    let row_length =  board_row.length
    /**
     * Add the board number and subtract empty space 
     * on row that was originally empty 
     */ 
    if (row_length === 1){
      board_number ++;
      board_row.push(board_number);
      board_row.splice(0,1)
    } 
    /**
     * Iterates through each value in a row
     */
    for (let r = 0; r < row_length; r++) {
      row_value = board_row[r]; 
      /**
       * Deletes empty spaces within a row
       */
      if (row_value === "") {
        board_row.splice(r, 1)
      }
    }
    //console.log(board_row)
  }



  /**
   * Now that input is organized, pass values through functions
   * 
   * This loop iterates through all rows.  If empty row is present, 
   * create a new board!
   */
  for (let c = 1; c < bingo_input.length; c ++) {
    if (bingo_input[c].length === 1) {
      /**
       * This creates our 2D array!
       * r = 1 because we want to access the next 5 rows past the board number
       */
      for (let r = 1; r <= 5; r++){
        /**
         * I'm trying to add each row to the board array
         */
        let row = bingo_input[c+r]
        console.log(row)
        // board[r].push(row)
        // console.log(board[r])
        board.push(row)
        console.log(board)
      }
      console.log("Pass board to compare()")
    }
    else {
      console.log("Pass")
    }
  }
  console.log("Numbers length: ", numbers.length)

  const answer = "Day 4 Answer goes here"

  return (
    answer
  );
}

export default Day4Solution;