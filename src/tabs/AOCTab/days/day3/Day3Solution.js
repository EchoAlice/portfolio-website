const Day3Solution = (props) => {
    // Parses file, separating string into individual values
  const input = props.input
  let binary_input = input.split(/\r?\n/);

  // Lengths of binary digits and array
  let row = binary_input.length;
  let column = binary_input[0].length; 

  let binary_input_gamma = "";
  let binary_input_epsilon = "";

  for (let c = 0; c < column; c++) {
    //Find most common bit in gamma rate.  Access each individual value in list
    let count_0 = 0;
    let count_1 = 0;
    
    // Calculates the number of times first bit of each number is present 
    for (let r = 0; r < row; r++) {
      parseInt(binary_input[r][c], 2) === 0 ? count_0 += 1 : count_1 += 1;
      parseInt(binary_input[r][c], 2) === 1 ? count_1 += 1 : count_0 += 1;
    }

    // Adds 0 or 1 to gamma and epsilon depending on which bit shows up more
    count_0 > count_1 ? binary_input_gamma += "0" : binary_input_gamma += "1";
    count_0 > count_1 ? binary_input_epsilon += "1" : binary_input_epsilon += "0";
  }

  // Convert binary to integer
  const gamma = parseInt(binary_input_gamma, 2);
  const epsilon = parseInt(binary_input_epsilon, 2 );

  const part1_answer = gamma * epsilon;
 
 /********************************************************
                        Part 2 
 ********************************************************/ 
  let bit_criteria = 0;
  let binary_input_copy = [];
  let answer = [];
 
  // We are updating the bit criteria within these functions, without returning the values
  // These next 2 functions are creating side effects
  const createGeneratorBitCriteria = (num_of_zero_bits, num_of_one_bits) => {
    if (num_of_zero_bits > num_of_one_bits) {
      bit_criteria = 0;
      return "0";
    }
    else {
      bit_criteria = 1;
      return "1";
    }
  }
  const createScrubberBitCriteria = (num_of_zero_bits, num_of_one_bits) => {
    if (num_of_zero_bits > num_of_one_bits) {
      bit_criteria = 1;
      return "1";
    }
    else {
      bit_criteria = 0;
      return "0";
    }
  }
  const winningNumber = (final_string) => parseInt(final_string, 2);
  const createBinaryCopy = (binary_input) => {
    for (let r = 0; r < binary_input.length; r++) {
      binary_input_copy[r] = binary_input[r];
    }
    return binary_input_copy;
  }
  
  // Cycles through each bit criteria and input array
  for (let a = 0; a < 2; a++) { 
    binary_input_copy = createBinaryCopy(binary_input); 
    row = binary_input_copy.length; 
    // Accesses each element in binary input 
    for (let c = 0; c < column; c++) { 
      let zero_bits = 0;
      let one_bits = 0;  
      // Records the number of each type of bit within a column
      for (let r = 0; r < row; r++) {
        let bit_in_question = binary_input_copy[r][c];  
        if (bit_in_question === '0') {
          zero_bits += 1;
        }
        else {
          one_bits += 1;
        }
      }
      // Generates bit criteria based on cycle 
      if (a === 0){
        bit_criteria = createGeneratorBitCriteria(zero_bits, one_bits); 
      }
      else {
        bit_criteria = createScrubberBitCriteria(zero_bits, one_bits); 
      } 
      // Compares each bit in question to criteria and deletes number from array   
      for (let r = row - 1; r >= 0; r--) {
        let bit = binary_input_copy[r][c]; 
        if (bit !== bit_criteria && row > 1) {
          binary_input_copy.splice(r, 1); 
        }
      }
      row = binary_input_copy.length;
      if (row === 1) {
        answer[a] = winningNumber(binary_input_copy);
      }
    }
  }

  const life_support_rating = answer[0] * answer[1];  
  const part2_answer = life_support_rating; 
  return( 
    <>
      <div>
        Part 1 Answer: {part1_answer} 
      </div>
      <div>
        Part 2 Answer: {part2_answer}  
      </div>
    </> 
    )
}

export default Day3Solution
