const Day2Solution = (input) => {
// Parses file, separating string into individual values
  const values = input.split("\r\n");
  let horizontal_position = 0;
  let sub_depth = 0;
  
  for (let i = 0; i < values.length; i++) {
    // Separates each value into another array to evaluate string before numeric value 
    const split_value = values[i].split(" ");
    const direction =  split_value[0];
    const value = parseInt(split_value[1]);
    
    // Arithmetic opperation applied depending on the direction given
    if (direction === "forward")
      horizontal_position += value;
      console.log(horizontal_position)
    if (direction === "up")
      sub_depth -= value;
      console.log(sub_depth)
    if (direction === "down")
      sub_depth += value;
      console.log(sub_depth)
    }
  
  const answer = sub_depth * horizontal_position
  
  return( 
    answer 
  )
}

export default Day2Solution;
