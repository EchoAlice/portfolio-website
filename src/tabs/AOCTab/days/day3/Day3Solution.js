const Day3Solution = (props) => {
    // Parses file, separating string into individual values
  const input = props.input
  const binary_input = input.split("\r\n");

  // Lengths of binary digits and array
  const width = binary_input[0].length; 
  const height = binary_input.length;

  let binary_input_gamma = "";
  let binary_input_epsilon = "";

  for (let c = 0; c < width; c++) {
    /**
     * Find most common bit in gamma rate
     * Access each individual value in list
     */
    let count_0 = 0;
    let count_1 = 0;
    /**
     * Calculates the number of times first bit of each number is present 
     */ 
    for (let r = 0; r < height; r++) {
      parseInt(binary_input[r][c]) === 0 ? count_0 += 1 : count_1 += 1;
      parseInt(binary_input[r][c]) === 1 ? count_1 += 1 : count_0 += 1;
    }

    /**
     * Adds 0 or 1 to gamma and epsilon depending on which bit shows up more
     */
    count_0 > count_1 ? binary_input_gamma += "0" : binary_input_gamma += "1";
    count_0 > count_1 ? binary_input_epsilon += "1" : binary_input_epsilon += "0";
  }

  /**
   * Convert binary to integer
   */
  const gamma = parseInt(binary_input_gamma, 2);
  const epsilon = parseInt(binary_input_epsilon, 2 );

  const answer = gamma * epsilon;
  return( 
    "Answer: " + answer
  )
}

export default Day3Solution