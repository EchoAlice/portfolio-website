const Day1Solution = (input) => {
  
  // Parses file, separating string into individual values
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

  const answer = depth_increases
  return( 
    answer
  )
}

export default Day1Solution;
