const Day1Solution = (input) => {
  //const answer ="Day 1 answer goes here" + input
  
  // Parses file, separating string into individual values
  const values = input.split("\r\n");
  console.log(values)
  
  const answer = values[0];
  return( 
    // This will be a string!
    answer
  )
}

export default Day1Solution;


/** 
 * Possibly how convert string into array of strings
 *    const values = input.split(" ")
 *    answer = String.valueOf(answer)
 */