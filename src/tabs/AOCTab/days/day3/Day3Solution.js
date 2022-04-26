const Day3Solution = (props) => {
    // Parses file, separating string into individual values
  const input = props.input
  var binary_input = input.split("\r\n");

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

  const part1_answer = gamma * epsilon;
 
 /********************************************************
                        Part 2 
 ********************************************************/ 
  let generator = 0;
  let scrubber = 0;
  let generator_bit_criteria = 0;
  // let scrubber_bit_criteria = 0;
  var row_p2 = binary_input.length;
  let column_p2 = binary_input[0].length;
  // I'll have to make a copy of the input array if I'm finding both O2 and Co2 values 
  console.log("\n");
  
  const generatorBitCriteria = (zero_bits, one_bits) => {
    if (zero_bits > one_bits) {
      generator_bit_criteria = 0;
      return "0";
    }
    if (zero_bits <= one_bits) {
      generator_bit_criteria = 1;
      return "1";
    }
  }
  // const scrubberBitCriteria = (zero_bits, one_bits) => {
  //   if (zero_bits > one_bits) {
  //     scrubber_bit_criteria = 1;
  //     return "1";
  //   }
  //   if (zero_bits <= one_bits) {
  //     scrubber_bit_criteria = 0;
  //     return "0";
  //   }
  // }
  const winningNumber = (final_string) => {
    let winner = parseInt(final_string, 2);
    return winner;
  }
  // Accesses each element in binary input 
  for (let c = 0; c < column_p2; c++) { 
    // Records the number of types of bits within a column
    let zero_bits = 0;
    let one_bits = 0;  
    for (let r = 0; r < row_p2; r++) {
      let bit_in_question = binary_input[r][c];  
      if (bit_in_question === '0') {
        zero_bits += 1;
      }
      else {
        one_bits += 1;
      }
    } 
    generator_bit_criteria = generatorBitCriteria(zero_bits, one_bits); 
    // scrubber_bit_criteria = scrubberBitCriteria(zero_bits, one_bits); 
    console.log(`Generator bit criteria: ${generator_bit_criteria}`); 
    // console.log(`Scrubber bit criteria: ${scrubber_bit_criteria}`); 

    // Compares each bit in question to criteria and deletes number from array   
    for (let r = row_p2 - 1; r >= 0; r--) {
      let bit_in_question = binary_input[r][c]; 
      if (bit_in_question !== generator_bit_criteria && row_p2 > 1) {
        binary_input.splice(r, 1); 
      }
    }
    console.log(`Survivors: ${binary_input}`);
    // Reseting variables 
    row_p2 = binary_input.length;
    if (row_p2 === 1) {
      console.log(`Strings remaining: ${row_p2}`);
      generator = winningNumber(binary_input);
    }
  }

  // binary_input works, but are all strings!
  const life_support_rating = generator + scrubber;  
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

// Loop isn't working.
    // for (let r = row_p2 - 1; r >= 0; r--) {
    //   console.log(`Row number: ${r}`); 
    //   console.log(`Row length: ${row_p2}`); 
    //   let bit_in_question = binary_input[r][0]; 
    //   let number_in_question = binary_input[r]; 
    //   if (bit_in_question !== generator_bit_criteria) {
    //     console.log("You shall not pass"); 
    //     console.log(`Number to delete: ${number_in_question}`); 
    //     console.log(binary_input);
    //     // why is splice not working 
    //     binary_input.splice(number_in_question, 1);
    //     // console.log(`Updated binary input: ${binary_input}`);
    //     console.log(binary_input);
    //     // Why does this not work?
    //     // binary_input.splice(number_in_question, 1);
    //   } 
