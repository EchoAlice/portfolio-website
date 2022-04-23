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

  const part1_answer = gamma * epsilon;
 
 /********************************************************
                        Part 2 
 ********************************************************/ 
  let generator = 0;
  let scrubber = 0;
  let zero_bits = 0;
  let one_bits = 0;  
  let generator_bit_criteria = 0;
  let scrubber_bit_criteria = 0;

  console.log("\n");
  
  const generatorBitCriteria = (zero_bits, one_bits) => {
    if (zero_bits > one_bits) {
      generator_bit_criteria = 0;
      return 0;
    }
    if (zero_bits <= one_bits) {
      generator_bit_criteria = 1;
      return 1;
    }
  }
  
  const scrubberBitCriteria = (zero_bits, one_bits) => {
    if (zero_bits > one_bits) {
      scrubber_bit_criteria = 1;
      return 1;
    }
    if (zero_bits <= one_bits) {
      scrubber_bit_criteria = 0;
      return 0;
    }
  }

  // Records the number of types of bits within a column
  // Put this inside larger for loop
  for (let h = 0; h < height; h++) {
    console.log(`Bit: ${binary_input[h][0]}`);
    if (binary_input[h][0] === '0') {
      zero_bits += 1;
    }
    else {
      one_bits += 1;
    }
  } 
  // Gen and scrub functions work!
  generator_bit_criteria = generatorBitCriteria(zero_bits, one_bits); 
  scrubber_bit_criteria = scrubberBitCriteria(zero_bits, one_bits); 

  console.log("Generator bit criteria: " + generator_bit_criteria);
  console.log("Scrubber bit criteria: " + scrubber_bit_criteria);
  console.log(`0 bits: ${zero_bits}`);
  console.log(`1 bits: ${one_bits}`);

  // binary_input works, but are all strings!
  const life_support_rating = generator * scrubber;  
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