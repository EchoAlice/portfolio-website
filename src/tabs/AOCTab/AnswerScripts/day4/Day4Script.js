const Day4Solution = (input) => {
  // Parses file, separating string into individual values
  // .split() returns a new array

  // Why does input.split("\r\n\r\n") not separate the input into
  // seperate boards?

  const test = input.split(",");
  console.log(test)
  const bingo_input = input.split("\r\n");
 
  /**
   * This feels like a super hacky way of separating the input
   * Please forgive me Sensei Leo
   *  
   *
   * Establishes different types of input
   * How do I create an array of arrays? These will be my boards
   */  
  let board_number = 0;
  let numbers = [];
  let board_row = [];
  let row_value = []; 
  /**
   * Parses calling numbers and bingo boards  
   *
   * Do I need to combine the 5 strings that make up each board?
   * Should I make a function that creates boards?  I feel like im hard coding the fuck out of this...
   *
   * Iterate through each row
   */
 
  for (let c = 0; c < bingo_input.length; c ++) {
    /**
     * Separates numbers from board inputs
     */

    if (c === 0) {
      numbers = bingo_input[c].split(",");
    } 
    else {
      /**
       * Separates row into array of individual integers
       */ 
      board_row = bingo_input[c].split(' ');
      //console.log("Length: ", board_row.length);
      
      let row_length =  board_row.length
      /**
       * call hypothetical board function here 
       */ 
      if (row_length === 1){
        board_number ++;
        console.log("Board number ", board_number)
      } 
     
      /**
       * Iterates through each value in a row
       * Problem:  As the row_length shrinks when deleting values in array,
       * the for loop's condition shrinks.
       */
      for (let r = 0; r < row_length; r++) {
        row_value = board_row[r]; 
        //console.log(row_value)
        /**
         * Deletes empty spaces within a row
         * console.log(row_value) reads undefined after splice, because... 
         * the thing no longer exists!
         */
        if (row_value === "") {
          board_row.splice(r, 1)
        }
      }
      console.log(board_row) 
    }
  }

  console.log("Numbers length: ", numbers.length)

  const answer = "Day 4 Answer goes here"

  return (
    answer
  );
}

export default Day4Solution;