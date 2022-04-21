const Day1Solution = (props) => {
  // Parses file, separating string into individual values
  const input = props.input
  const depths = input.split("\r\n");
  
  let previous_element = 0;
  let depth_increases = 0;

  for (let i = 0; i < depths.length; i++) {
    const depth_calculation = depths[i] - previous_element;
    if (depth_calculation > 0 && previous_element !== 0) {
      depth_increases = depth_increases + 1;
    }
    previous_element = depths[i]; 
  }

  const part1_answer = depth_increases;

/********************************************************
                        Part 2 
 ********************************************************/
  let previous_window = 0;  
  let part2_depth_increases = 0;
  
  for (let i = 0; i < depths.length - 2; i++) {
    const current_window = parseInt(depths[i])+parseInt(depths[i+1])+parseInt(depths[i+2]);
    const depth_calculation = current_window - previous_window;
    if (depth_calculation > 0 && previous_window !== 0) {
      part2_depth_increases = part2_depth_increases + 1;
    }
    previous_window = current_window; 
  }

  const part2_answer = part2_depth_increases;
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

export default Day1Solution;