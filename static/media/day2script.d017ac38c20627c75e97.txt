const Day2Solution = (props) => {
  const input = props.input
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
    if (direction === "up")
      sub_depth -= value;
    if (direction === "down")
      sub_depth += value;
    }
  
  const part1_answer = sub_depth * horizontal_position;
  
/********************************************************
                        Part 2 
 ********************************************************/  
 
  let horizontal_position_p2 = 0;
  let sub_depth_p2 = 0;
  let aim = 0;

  for (let i = 0; i < values.length; i++) {
    // Separates each value into another array to evaluate string before numeric value 
    const split_value = values[i].split(" ");
    const direction =  split_value[0];
    const value = parseInt(split_value[1]);
    if (direction === "forward") {
      horizontal_position_p2 += value;
      sub_depth_p2 += aim * value;
    }
    if (direction === "up") {
      aim -= value;
    }
    if (direction === "down") {
      aim += value;
    }
  }
  const part2_answer = horizontal_position_p2 * sub_depth_p2;

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

export default Day2Solution;
